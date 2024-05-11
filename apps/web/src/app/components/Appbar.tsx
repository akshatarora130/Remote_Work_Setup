import {signOut} from "next-auth/react";
import {useRouter} from "next/navigation";

const Appbar = (props: any) => {
    const session = props.session;
    const router = useRouter()

    const login = () => {
        router.push("/Login")
    }
    const logout = () => {
        signOut({
            callbackUrl: "/"
        }).then(() => {
            console.log("Logged out")
        })
    }

    const handleProfile = () => {
        router.push("/profile/edit")
    }

    return (
        <>
            <div className="w-full bg-black border-b-2 border-white h-16 flex justify-between">
                <div className="m-2 p-2">
                    REMOTE WORK SETUP
                </div>
                <div className="m-2 p-2">
                    {session != undefined ? (
                        <div className="flex gap-4">
                            {session.user.active ? (
                                <></>
                            ) : (
                                <button
                                    onClick={handleProfile}
                                    className="px-2 py-1 rounded-lg bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                >
                                    Complete Profile
                                </button>
                            )}
                            <button
                                onClick={logout}
                                className="px-2 py-1 rounded-lg bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={login}
                            className="px-2 py-1 rounded-lg bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                        >
                            Login
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}

export default Appbar;