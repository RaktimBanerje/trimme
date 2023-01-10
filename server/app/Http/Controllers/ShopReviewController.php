<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ShopReview;
use Auth;

class ShopReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $shop_id = $request->query('shop');
        return response(["reviews" => ShopReview::where('shop_id', $shop_id)->get()]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $review = ShopReview::create([
            "user_id"  => Auth::user()->id,
            "shop_id"  => $request->shop_id,
            "star"     => $request->star,
            "feedback" => $request->feedback,
        ]);

        return response()->json(['review' => $review]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
