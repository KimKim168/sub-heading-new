<?php

use App\Models\Banner;
use App\Models\Item;
use App\Models\ItemCategory;
use App\Models\Page;
use App\Models\PagePosition;
use App\Models\Video;
use App\Models\VideoCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function (Request $request) {
    $search = $request->input('search', '');
    $category_code = $request->input('category_code', '');

    // -------- VIDEO Query --------
    $videoQuery = Video::query()->where('status', 'active');

    if ($category_code) {
        $videoCategory = VideoCategory::where('parent_code', 'VIDEO')
            ->with('children')
            ->where('code', $category_code)
            ->first();

        if ($videoCategory) {
            $categoryCodes = collect([$videoCategory->code])
                ->merge($videoCategory->children->pluck('code'))
                ->toArray();

            $videoQuery->whereIn('category_code', $categoryCodes);
        }
    }

    if ($search) {
        $videoQuery->where(function ($subQuery) use ($search) {
            $subQuery->where('title', 'LIKE', "%{$search}%")
                     ->orWhere('title_kh', 'LIKE', "%{$search}%");
        });
    }

    $tableDataVideo = $videoQuery->paginate(3)->onEachSide(1);

    // -------- ITEM Query (How-To) --------
    $itemQuery = Item::query()
        ->with('images', 'category')
        ->where('status', 'active');

    if ($category_code) {
        $itemCategory = ItemCategory::where('parent_code', 'HOW_TO')
            ->with('children')
            ->where('code', $category_code)
            ->first();

        if ($itemCategory) {
            $itemCategoryCodes = collect([$itemCategory->code])
                ->merge($itemCategory->children->pluck('code'))
                ->toArray();

            $itemQuery->whereIn('category_code', $itemCategoryCodes);
        }
    }

    $tableData = $itemQuery->limit(4)->get();

    // -------- Static Content --------
    $banners = Banner::orderBy('order_index')
        ->where('status', 'active')
        ->get();

    $heroSection = Page::where('position_code', 'HERO_SECTION_ON_THE_HOME_PAGE')
        ->where('status', 'active')
        ->with('images')
        ->orderBy('order_index')
        ->first();

    $relatedArticle = Page::where('position_code', 'RELATED_ARTICLE')
        ->where('status', 'active')
        ->with('images')
        ->orderBy('order_index')
        ->get();

    $postCategories = VideoCategory::where('parent_code', 'VIDEO')
        ->where('status', 'active')
        ->orderBy('order_index')
        ->get();

    return Inertia::render('subHeading/home/Index', [
        'banners' => $banners,
        'tableData' => $tableData, // items (how to)
        'tableDataVideo' => $tableDataVideo, // paginated videos
        'heroSection' => $heroSection,
        'relatedArticle' => $relatedArticle,
        'postCategories' => $postCategories,
    ]);
});


// Route::get('/page/{id}', function($id){
//     $show = Page::find($id);
//     return Inertia::render('subHeading/howTo/Show',[
//         'show' => $show
//     ]);
// });

Route::get('/how_to', function (Request $request) {
    $search = $request->input('search', '');
    $category_code = $request->input('category_code', '');
    $perPage = $request->input('perPage', 25);

    $query = Item::query()->with('images', 'category')->orderBy('created_at', 'desc');

    if ($category_code) {
        $category = ItemCategory::where('parent_code', 'HOW_TO')
            ->with('children')
            ->where('code', $category_code)
            ->first();

        if ($category) {
            $categoryCodes = collect([$category->code])
                ->merge($category->children->pluck('code'))
                ->toArray();

            $query->whereIn('category_code', $categoryCodes);
        }
    }

    if ($search) {
        $query->where(function ($sub_query) use ($search) {
            $sub_query->where('name', 'LIKE', "%{$search}%")
                      ->orWhere('name_kh', 'LIKE', "%{$search}%");
        });
    }

    $query->where('status', 'active');

    $tableData = $query->paginate($perPage)->onEachSide(1);

    $postCategories = ItemCategory::where('parent_code', 'HOW_TO')
        ->where('status', 'active')
        ->orderBy('order_index')
        ->get();

    return Inertia::render('subHeading/howTo/Index', [
        'tableData' => $tableData,
        'postCategories' => $postCategories,
    ]);
});
Route::get('/how_to/{id}', function ($id) {
    $showData = Item::with('images')->findOrFail($id);
    $relatedPosts = Item::with('category', 'images')
            ->where('id', '!=', $id)
            ->where('category_code', $showData->category_code) // match category_code
            ->where('status', 'active')
            ->orderBy('id', 'desc')
            ->get();
    return Inertia::render('subHeading/howTo/Show', [
        'showData' => $showData,
        'relatedPosts' => $relatedPosts,
    ]);
});

Route::get('/videos', function (Request $request) {
   $search = $request->input('search', '');
    $category_code = $request->input('category_code', '');
    $perPage = $request->input('perPage', 25);

    $query = video::query();

    if ($category_code) {
        $category = VideoCategory::where('parent_code', 'VIDEO')
            ->with('children')
            ->where('code', $category_code)
            ->first();

        if ($category) {
            $categoryCodes = collect([$category->code])
                ->merge($category->children->pluck('code'))
                ->toArray();

            $query->whereIn('category_code', $categoryCodes);
        }
    }

    if ($search) {
        $query->where(function ($sub_query) use ($search) {
            $sub_query->where('title', 'LIKE', "%{$search}%")
                      ->orWhere('title_kh', 'LIKE', "%{$search}%");
        });
    }

    $query->where('status', 'active');

    $tableDataVideo = $query->paginate($perPage)->onEachSide(1);

    $postCategories = VideoCategory::where('parent_code', 'VIDEO')
        ->where('status', 'active')
        ->orderBy('order_index')
        ->get();
        // return $postCategories;
    return Inertia::render('subHeading/video/Index',[
         'tableDataVideo' => $tableDataVideo,
        'postCategories' => $postCategories,
    ]);
});

// Route::get('/contact', function(){
//     return Inertia::render('subHeading/contact/Index');
// });

Route::get('/download', function () {
    $downloadTop = Page::where('position_code', 'DOWNLOAD_TOP')
        ->where('status', 'active')
        ->orderBy('order_index')
        ->get();
    $downloadBottom = Page::where('position_code', 'DOWNLOAD_BOTTOM')
        ->where('status', 'active')
        ->orderBy('order_index')
        ->get();
    // return $downloadBottom;
    return Inertia::render('subHeading/download/Index',[
        'downloadTop' => $downloadTop,
        'downloadBottom' => $downloadBottom,
    ]);
});


