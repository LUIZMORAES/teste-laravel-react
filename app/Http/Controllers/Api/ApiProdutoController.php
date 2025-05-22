<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Produto;

class ApiProdutoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function list_produto()
    {
        return response()->json(['mensagem' => 'Achou api e ProdutosController'], 200);

        //$produtos = Produto::all();
        // $produtos = Produto::orderByDesc('id')->paginate(10);

        return $produtos;

        //return Inertia::render('Users/UserIndex', ['users' => $users]);

    }
}
