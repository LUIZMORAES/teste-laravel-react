import InfoButton from "@/Components/Button/InfoButton";
import WarningButton from "@/Components/Button/WarningButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function ProdugoEdit({ auth, produto }) {
    const { data, setData, put, processing, errors } = useForm({
        id: produto.id || "",
        nome: produto.nome || "",
        descricao: produto.descricao || "",
        categoria: produto.categoria || "",
        preco: produto.preco || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        put(route("produtos.update", { produto: data.id }));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Produto
                </h2>
            }
        >
            <Head title="Produto" />

            <div className="py-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg dark:bg-gray-800">
                    <div className="flex justify-between items-center m-4">
                        <h3 className="text-lg">Editar</h3>
                        <div className="flex space-x-4">
                            <Link href={route("produtos.index")}>
                                <InfoButton>Listar</InfoButton>
                            </Link>
                        </div>
                    </div>

                    <div className="bg-gray-50 text-sm dark:bg-gray-700 p-4 rounded-lg shadow-m">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label
                                    htmlFor="nome"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Nome
                                </label>
                                <input
                                    id="nome"
                                    type="text"
                                    placeholder="Nome completo do produto"
                                    value={data.nome}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                {errors.nome && (
                                    <span className="text-red-600">
                                        {errors.nome}
                                    </span>
                                )}
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="descricao"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Descrição
                                </label>
                                <input
                                    id="descricao"
                                    type="text"
                                    placeholder="Descrição do produto"
                                    value={data.descricao}
                                    onChange={(e) =>
                                        setData("descricao", e.target.value)
                                    }
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                {errors.descricao && (
                                    <span className="text-red-600">
                                        {errors.descricao}
                                    </span>
                                )}
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="categoria"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Categoria
                                </label>
                                <input
                                    id="categoria"
                                    type="text"
                                    placeholder="Categoria do produto"
                                    value={data.categoria}
                                    onChange={(e) =>
                                        setData("categoria", e.target.value)
                                    }
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                {errors.categoria && (
                                    <span className="text-red-600">
                                        {errors.categoria}
                                    </span>
                                )}
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="preco"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Preço
                                </label>
                                <input
                                    id="preco"
                                    type="text"
                                    placeholder="Valor do produto"
                                    value={data.preco}
                                    onChange={(e) =>
                                        setData("preco", e.target.value)
                                    }
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                {errors.preco && (
                                    <span className="text-red-600">
                                        {errors.preco}
                                    </span>
                                )}
                            </div>

                            <div className="flex justify-end">
                                <WarningButton
                                    type="submit"
                                    disabled={processing}
                                    className="text-sm"
                                >
                                    Salvar
                                </WarningButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
