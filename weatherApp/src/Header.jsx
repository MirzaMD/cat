export function Header(){
    const box={
        background:"linear-gradient(beige,whitesmoke,beige)",
    }
    return(<section className="flex justify-center items-center h-[130px] w-full" style={box}>
        <h1 className=" text-xl sm:text-4xl font-serif text-gray-600">Cute Cats</h1>
    </section>)
}