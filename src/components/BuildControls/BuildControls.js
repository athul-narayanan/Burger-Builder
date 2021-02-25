import React from 'react' ;
import BuildControl from './BuildControl/BuildControl';
import classess from './BuildControls.module.css'

const controls = [
    {label : 'Salad',value:'salad'},
    {label : 'Cheese',value:'cheese'},
    {label : 'Bacon',value:'bacon'},
    {label : 'Meat',value:'meat'},
]
const BuildControls = (props)=>{
    return(
        <div className={classess.BuildControl}>
            <p> Current Price : {props.currentprice}</p>
            {
            controls.map(cntr=>{
               return <BuildControl 
                        add={()=>props.addIngra(cntr.value)} 
                        remove={()=>props.removeIngra(cntr.value)}
                        key={cntr.label} 
                        label={cntr.label} disabled={props.disableList[cntr.value]<=0} />
            })
            }
            <button onClick={props.purchasing} disabled={!props.purchasable} className={classess.OrderButton}>ORDER NOW</button>
        </div>
    )
}

export default BuildControls