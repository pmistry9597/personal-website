export default function SeparatedList(props) {
    return (
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', maxHeight: '30px',}}>
            {props.items[0]}
            {
                props.items.slice(1).map((it) => {
                    return <>
                        <div style={{fontSize: '80px'}}>
                            •
                        </div>
                        {it}
                    </>
                })
            }
        </div>
    )
}