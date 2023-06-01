import HighlightActivityComponent from "./HightlightActivity";

export default function HighlightActivityDetailsPage({ params }: any) {
    return (
        <HighlightActivityComponent activity={params.activity_type} />
    )
}
