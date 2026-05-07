export default function RecipeDetail({ params }: { params: { id: string } }) {
    const { id } = params;

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FDECE4]">
            <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
                <h1 className="text-3xl font-bold text-[#4E0706]">
                    Recipe Detail Page
                </h1>

                <p className="mt-4 text-lg">You are viewing recipe with ID:</p>

                <span className="text-2xl font-bold text-orange-600">{id}</span>
            </div>
        </div>
    );
}
