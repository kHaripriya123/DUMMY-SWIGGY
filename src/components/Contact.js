const Contact = () => {
    return (
    <div>
        <h1 className = "p-2 m-2 font-bold"> Contact US PAGE </h1>
        <form>
            <input type = "text" className = "border border-black m-2 p-2" placeholder = "name"></input>
            <input type = "text" className = "border border-black m-2 p-2" placeholder = "message"></input>
            <button className = "rounded-lg bg-green-600 text-white m-2 p-2"> Submit </button>
        </form>
    </div>
    );
};
export default Contact;