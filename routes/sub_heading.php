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

    $category_code = $request->input('category_code', '');
    $query = Item::query()->with('images', 'category');

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

    $query->where('status', 'active');

    $tableData = $query->limit(4)->get(); // You forgot to call ->get()
    // return $banners;
    return Inertia::render('subHeading/home/Index', [
        'banners' => $banners,
        'tableData' => $tableData,
        'heroSection' => $heroSection,
        'relatedArticle' => $relatedArticle,
    ]);
});


Route::get('/page/{id}', function($id){
    $show = Page::find($id);
    return Inertia::render('subHeading/howTo/Show',[
        'show' => $show
    ]);
});

Route::get('/how_to', function (Request $request) {
    $search = $request->input('search', '');
    $category_code = $request->input('category_code', '');
    $perPage = $request->input('perPage', 25);

    $query = Item::query()->with('images', 'category');

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
    $show = Item::find($id);
    // return $show;
    return Inertia::render('subHeading/howTo/Show',[
        'show' => $show
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

    $tableData = $query->paginate($perPage)->onEachSide(1);

    $postCategories = VideoCategory::where('parent_code', 'VIDEO')
        ->where('status', 'active')
        ->orderBy('order_index')
        ->get();
        // return $postCategories;
    return Inertia::render('subHeading/video/Index',[
         'tableData' => $tableData,
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


