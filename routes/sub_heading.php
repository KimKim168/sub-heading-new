<?php

use App\Models\Banner;
use App\Models\Item;
use App\Models\ItemCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    $banners = Banner::orderBy('order_index')->where('status', 'active')->get();
    // return($banners);

    return Inertia::render('subHeading/home/Index', [
        'banners' => $banners,
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
  
    return Inertia::render('subHeading/video/Index',[
       
    ]);
});

// Route::get('/contact', function(){
//     return Inertia::render('subHeading/contact/Index');
// });

Route::get('/download', function () {
    return Inertia::render('subHeading/download/Index');
});
