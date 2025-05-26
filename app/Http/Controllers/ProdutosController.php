<?php

namespace App\Http\Controllers;

use App\Models\Produto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProdutosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        //$produtos = Produto::all();
        $produtos = Produto::orderByDesc('id')->paginate(10);

        //return $produtos;
        return Inertia::render('Produtos/ProdutoIndex', ['produtos' => $produtos]);

    }

    /**
    * Display the specified resource.
    */
    public function show(produto $produtos): Response
    {
        return Inertia::render('Users/UserShow', ['produto' => $produtos]);
    }

    //     public function show(User $user): Response
    // {
    //     return Inertia::render('Users/UserShow', ['user' => $user]);
    // }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

     /**
     * Show the form for editing the specified resource.
     */
    public function edit(produtos $produtos)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, produtos $produtos)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(produtos $produtos)
    {
        //
    }
}
