
export default function Login() {
    return (
        <form className="max-w-[500px] mx-auto px-4 py-8 border">
            <h2>Login</h2>

            <div className="grid gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="border py-2" />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="border py-2" />
                </div>
                <button className="border py-2">Enviar</button>
            </div>

        </form>
    )
}
