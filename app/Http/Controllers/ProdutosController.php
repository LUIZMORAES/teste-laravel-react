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
    public function show(Produto $produto): Response
    {
        return Inertia::render('Produtos/ProdutoShow', ['produto' => $produto]);
    }

    /**
    * Show the form for creating a new resource.
    */
    public function create(): Response
    {
        return Inertia::render('Produtos/ProdutoCreate');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate(
            [
                'nome' => 'required|string|max:255',
                'descricao' => 'required|string|max:255',
                'preco' => 'required|string|min:1|max:255',
                'categoria' => 'required|string|min:1|max:255'
            ],
            [
                'nome.required' => 'O campo nome é obrigatório!',
                'nome.string' => 'O nome deve ser uma string válida.',
                'nome.max' => 'O nome não pode ter mais que :max caracteres.',
                'descricao.required' => 'O campo descricao é obrigatório.',
                'descricao.string' => 'O descricao deve ser uma string válida.',
                'descricao.email' => 'O descricao deve uma string válida.',
                'descricao.max' => 'O e-mail não pode ter mais que :max caracteres.',
                'preco.required' => 'O campo senha é obrigatório.',
                'preco.string' => 'A senha deve ser uma string válida.',
                'preco.min' => 'A senha não pode ter menos que :min caracteres.',
                'preco.max' => 'A senha não pode ter mais que :max caracteres.',
                'categoria.required' => 'O campo categoria é obrigatório!',
                'categoria.string' => 'O categoria deve ser uma string válida.',
                'categoria.max' => 'O categoria não pode ter mais que :max caracteres.',

            ]
        );

        $produto = Produto::create([
            'nome' => $request->nome,
            'descricao' => $request->descricao,
            'preco' => $request->preco,
            'categoria' => $request->categoria,
        ]);

        return Redirect::route('produtos.show', ['produto' => $produto->id])->with('success', 'Produto Cadastrado com sucesso!');
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
