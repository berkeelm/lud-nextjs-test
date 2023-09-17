import LoggedInOnly from "@/components/LoggedInOnly"

const testPage = () => {
    return (
        <LoggedInOnly>
            <div>test</div>
        </LoggedInOnly>
    )
}

export default testPage;