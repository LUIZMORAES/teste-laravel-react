import AlertMessage from "@/Components/Alert/AlertMessage";
import PrimaryButton from "@/Components/Button/PrimaryButton";
import SuccessButton from "@/Components/Button/SuccessButton";
import WarningButton from "@/Components/Button/WarningButton";
import ConfirmDeleteButton from "@/Components/Delete/ConfirmDeleteButton";
import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";

export default function ProdutoIndex({ auth, produtos }) {
    const { flash } = usePage().props;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Produtos
                </h2>
            }
        >
            <Head title="Produto" />

            <div className="py-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg dark:bg-gray-800">
                    <div className="flex justify-between items-center m-4">
                        <h3 className="text-lg">Listar</h3>
                        <div className="flex space-x-4">
                            <Link href={route("produtos.create")}>
                                <SuccessButton>Cadastrar</SuccessButton>
                            </Link>
                        </div>
                    </div>

                    {/* Exibir mensagens de alerta */}
                    <AlertMessage message={flash} />

                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <td className="px-6 py-3 text-left text-sm font-medium text-gray-500 tracking-wider">
                                    ID
                                </td>
                                <td className="px-6 py-3 text-left text-sm font-medium text-gray-500 tracking-wider">
                                    Nome
                                </td>
                                <td className="px-6 py-3 text-left text-sm font-medium text-gray-500 tracking-wider">
                                    Descrrição
                                </td>
                                <td className="px-6 py-3 text-center text-sm font-medium text-gray-500 tracking-wider">
                                    Ações
                                </td>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                            {produtos.data.map((produto) => (
                                <tr key={produto.id}>
                                    <td className="px-6 py-2 text-sm text-gray-500 tracking-wider">
                                        {produto.id}
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-500 tracking-wider">
                                        {produto.nome}
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-500 tracking-wider">
                                        {produto.descricao}
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-500 tracking-wider">
                                        <Link
                                            href={route("produtos.show", {
                                                id: produto.id,
                                            })}
                                        >
                                            <PrimaryButton className="ms-1">
                                                Visualizar
                                            </PrimaryButton>
                                        </Link>
                                        <Link
                                            href={route("produtos.edit", {
                                                id: produto.id,
                                            })}
                                        >
                                            <WarningButton className="ms-1">
                                                Editar
                                            </WarningButton>
                                        </Link>
                                        <ConfirmDeleteButton
                                            id={produto.id}
                                            routeName="produtos.destroy"
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Paginação */}
                    <Pagination
                        links={produtos.links}
                        currentPage={produtos.current_page}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
