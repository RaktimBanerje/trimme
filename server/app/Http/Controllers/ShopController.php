<?php

namespace App\Http\Controllers;

use App\Models\Shop;
use App\Models\Service;
use App\Models\ShopReview;
use Illuminate\Http\Request;
use Validator;
use Auth;

class ShopController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $shops = Shop::all();

        for($i = 0; $i<count($shops); $i++) {
            $shops[$i]->star = number_format(ShopReview::where("shop_id", $shops[$i]->id)->avg("star"), 1);
            $shops[$i]->reviews = ShopReview::where("shop_id", $shops[$i]->id)->count("star");
        }

        return response(["shops" => $shops]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();

        $validation = Validator::make($input, [
            'name' => 'required',
            'address' => 'required',
            'latitude' => 'required',
            'longitude' => 'required',
        ]);

        if($validation->fails()) {
            return response()->json(['errors' => $validation->errors()->all()], 400);
        }
        else {
            $shop = Shop::create([
                "user_id"       => Auth::user()->id,
                "image"         => "",
                "name"          => $request->name,
                "address"       => $request->address,
                "latitude"      => $request->latitude,
                "longitude"     => $request->longitude,
            ]);

            return response()->json(['shop' => $shop]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Shop  $shop
     * @return \Illuminate\Http\Response
     */
    public function show(Shop $shop)
    {
        $shop["services"] = Service::where("shop_id", $shop->id)->get();
        $shop["customerReviews"] = ShopReview::where("shop_id", $shop->id)->get();
        $shop["portfolios"] = [];

        return response()->json(['shop' => $shop]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Shop  $shop
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Shop $shop)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Shop  $shop
     * @return \Illuminate\Http\Response
     */
    public function destroy(Shop $shop)
    {
        //
    }
}
