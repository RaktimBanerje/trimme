<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ServiceReview;
use Auth;

class ServiceReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $service_id = $request->query('service');
        return response(["reviews" => ServiceReview::where('service_id', $service_id)->get()]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $review = ServiceReview::create([
            "user_id"       => Auth::user()->id,
            "service_id"    => $request->service_id,
            "star"          => $request->star,
            "feedback"      => $request->feedback,
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
