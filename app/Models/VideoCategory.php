<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VideoCategory extends Model
{
    /** @use HasFactory<\Database\Factories\ItemCategoryFactory> */
    use HasFactory;
    protected $guarded = [];
    public function created_by()
    {
        return $this->belongsTo(User::class, 'created_by', 'id');
    }
    public function updated_by()
    {
        return $this->belongsTo(User::class, 'updated_by', 'id');
    }

    public function items()
    {
        return $this->hasMany(Video::class, 'category_code', 'code');
    }
    public function children()
    {
        return $this->hasMany(VideoCategory::class, 'parent_code', 'code');
    }
    public function parent()
    {
        return $this->belongsTo(VideoCategory::class, 'parent_code', 'code');
    }

    public function children_videos()
    {
        return $this->hasManyThrough(Video::class, VideoCategory::class, 'parent_code', 'category_code', 'code', 'code');
    }
}
