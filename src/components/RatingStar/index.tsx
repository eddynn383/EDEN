import Icon from '../Icon'

const RatingStar = ({value, idx}:any) => {
    const integerValue = parseInt(value)

    const getDecimalPart = (value:number) => {
        if (Number.isInteger(value)) {
            return 0
        }

        const decimals = value.toString().split('.')[1]
        return Number(decimals)
    }

    const progress = idx > value ? value > integerValue ? getDecimalPart(value) : 0 : 100

    return (
        <span className="rating_star" data-progress={progress}>
            <label htmlFor="inputStar">{idx + 1}</label>
            <input id="inputStar" type="radio" defaultChecked={idx <= value ? true : false}/>
            {/* <span className="rating_star-icon"> */}
                <Icon classes={['star base']} icon="faStar" />
                {/* <Icon classes={['star fullfill']} icon="faStar" style={{width: `${progress}%`}}/> */}
            {/* </span> */}
        </span>
    )
}

export default RatingStar
