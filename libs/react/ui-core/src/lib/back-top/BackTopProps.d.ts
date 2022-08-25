import { DefaultParams } from '../../default-types/defaultParams';
import { ClickableObjectMini } from '../../default-types/ClickableObjectMini';

export interface BackTopProps extends DefaultParams {
    /** Scroll threshold when to show button, in pixels */
    threshold?: number;
}
