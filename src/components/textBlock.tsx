import "/Users/jacki/Desktop/School/Classes/Summer25/Art23/exp20/Tea/src/components/textBlock.css"

export default function TextBlock(props) {
    return (
        <div className="container">
            <h2 className="blackText">{props.title}</h2>
            <p className="blackText">{props.text}</p>
        </div>
    )
}