export default function Button({children, ...props}){
    return <button className="px-4 py-5 font-semibold uppercase rounded text-stone-900 bg-amber-400 hover:bg-amber-400"
        {...props}>
            {children}</button>
};