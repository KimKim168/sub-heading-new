<?php

namespace App\Http\Controllers;

use App\Helpers\ImageHelper;
use App\Models\VideoCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Routing\Controllers\HasMiddleware;

class VideoCategoryController extends Controller implements HasMiddleware
{
    public static function middleware(): array
    {
        return [
            new Middleware('permission:video view', only: ['index', 'show', 'all_video_categories']),
            new Middleware('permission:video create', only: ['create', 'store']),
            new Middleware('permission:video update', only: ['edit', 'update', 'update_status']),
            new Middleware('permission:video delete', only: ['destroy', 'destroy_image']),
        ];
    }

    public function index(Request $request)
    {
        $search = $request->input('search', '');
        $sortBy = $request->input('sortBy', 'id');
        $sortDirection = $request->input('sortDirection', 'desc');
        $status = $request->input('status');

        $query = VideoCategory::query()->with('created_by', 'updated_by');

        if ($status) {
            $query->where('status', $status);
        }

        if ($search) {
            $query->where(function ($sub_query) use ($search) {
                $sub_query->where('name', 'LIKE', "%{$search}%")
                    ->orWhere('name_kh', 'LIKE', "%{$search}%")
                    ->orWhere('code', 'LIKE', "%{$search}%");
            });
        }

        $query->orderBy($sortBy, $sortDirection);

        $tableData = $query->paginate(perPage: 10)->onEachSide(1);

        return Inertia::render('admin/video_categories/Index', [
            'tableData' => $tableData,
        ]);
    }

    public function all_video_categories()
    {
        $tableData = VideoCategory::where('status', 'active')
            ->orderBy('id', 'desc')
            ->get();
        return response()->json($tableData);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'name_kh' => 'nullable|string|max:255',
            'code' => 'required|string|max:255|unique:video_categories,code',
            'short_description' => 'nullable|string|max:255',
            'short_description_kh' => 'nullable|string|max:255',
            'parent_code' => 'nullable|string|max:255',
            'order_index' => 'nullable|numeric|max:255',
            'status' => 'nullable|string|in:active,inactive',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp,svg|max:2048',
            'banner' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp,svg|max:2048',
        ]);

        $validated['created_by'] = $request->user()->id;
        $validated['updated_by'] = $request->user()->id;

        $image_file = $request->file('image');
        $banner_file = $request->file('banner');
        unset($validated['image'], $validated['banner']);

        foreach ($validated as $key => $value) {
            if ($value === '') {
                $validated[$key] = null;
            }
        }

        if ($image_file) {
            try {
                $validated['image'] = ImageHelper::uploadAndResizeImageWebp($image_file, 'assets/images/video_categories', 600);
            } catch (\Exception $e) {
                return redirect()->back()->with('error', 'Failed to upload image: ' . $e->getMessage());
            }
        }

        if ($banner_file) {
            try {
                $validated['banner'] = ImageHelper::uploadAndResizeImageWebp($banner_file, 'assets/images/video_categories', 900);
            } catch (\Exception $e) {
                return redirect()->back()->with('error', 'Failed to upload banner: ' . $e->getMessage());
            }
        }

        VideoCategory::create($validated);

        return redirect()->back()->with('success', 'Category created successfully!');
    }

    public function update(Request $request, VideoCategory $video_category)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'name_kh' => 'nullable|string|max:255',
            'code' => 'required|string|max:255|unique:video_categories,code,' . $video_category->id,
            'short_description' => 'nullable|string|max:255',
            'short_description_kh' => 'nullable|string|max:255',
            'parent_code' => 'nullable|string|max:255',
            'order_index' => 'nullable|numeric|max:255',
            'status' => 'nullable|string|in:active,inactive',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp,svg|max:2048',
            'banner' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp,svg|max:2048',
        ]);

        $validated['updated_by'] = $request->user()->id;

        $image_file = $request->file('image');
        $banner_file = $request->file('banner');
        unset($validated['image'], $validated['banner']);

        foreach ($validated as $key => $value) {
            if ($value === '') {
                $validated[$key] = null;
            }
        }

        if ($image_file) {
            try {
                $created_image = ImageHelper::uploadAndResizeImageWebp($image_file, 'assets/images/video_categories', 600);
                if ($video_category->image) {
                    ImageHelper::deleteImage($video_category->image, 'assets/images/video_categories');
                }
                $validated['image'] = $created_image;
            } catch (\Exception $e) {
                return redirect()->back()->with('error', 'Failed to upload image: ' . $e->getMessage());
            }
        }

        if ($banner_file) {
            try {
                $created_banner = ImageHelper::uploadAndResizeImageWebp($banner_file, 'assets/images/video_categories', 900);
                if ($video_category->banner) {
                    ImageHelper::deleteImage($video_category->banner, 'assets/images/video_categories');
                }
                $validated['banner'] = $created_banner;
            } catch (\Exception $e) {
                return redirect()->back()->with('error', 'Failed to upload banner: ' . $e->getMessage());
            }
        }

        $video_category->update($validated);

        return redirect()->back()->with('success', 'Category updated successfully!');
    }

    public function update_status(Request $request, VideoCategory $video_category)
    {
        $request->validate([
            'status' => 'required|string|in:active,inactive',
        ]);

        $video_category->update([
            'status' => $request->status,
        ]);

        return redirect()->back()->with('success', 'Status updated successfully!');
    }

    public function destroy(VideoCategory $video_category)
    {
        if ($video_category->image) {
            ImageHelper::deleteImage($video_category->image, 'assets/images/video_categories');
        }

        if ($video_category->banner) {
            ImageHelper::deleteImage($video_category->banner, 'assets/images/video_categories');
        }

        $video_category->delete();

        return redirect()->back()->with('success', 'Category deleted successfully.');
    }
}
