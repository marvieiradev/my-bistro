import { Spinner } from "../../components/ui/spinner"

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Spinner className="text-background h-10 w-10"/>
        </div>
    )
}