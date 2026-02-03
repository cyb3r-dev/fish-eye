import Header from "../../components/Header/Header";

export default async function PhotographerPage({ params }) {
    const { slug } = await params;
    return (
        <>
            <Header showSubtitle={false} />
        </>
    );
}