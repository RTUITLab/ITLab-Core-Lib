import { StepsItemProps } from './StepsProps';

interface StepProps extends StepsItemProps {
  state: 'past' | 'current' | 'future';
}
