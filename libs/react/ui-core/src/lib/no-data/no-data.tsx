import {forwardRef} from 'react'
import {NoDataProps} from './NoDataProps'
import {useNoData} from './useNoData'
import {ReactComponent as Empty} from '../../../../../../assets/NoDataWithoutLogo.svg'
import {ReactComponent as WithLogo} from '../../../../../../assets/NoDataWithLogo.svg'

export const NoData = forwardRef(({displayLogo = false, ...props}: NoDataProps, ref: any) => {
  const {classes} = useNoData(props)

  return (
    <div ref={ref} style={props.style} className={classes}>
      {
        displayLogo
        ? <WithLogo />
        : <Empty />
      }
    </div>
  );
})
