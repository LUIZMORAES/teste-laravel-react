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

        $produtos = Produto::all();

        return $produtos;

    }
}
