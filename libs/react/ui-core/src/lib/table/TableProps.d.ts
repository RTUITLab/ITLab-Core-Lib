import {DefaultParams} from '../../default-types/defaultParams'

export interface TableProps extends DefaultParams{
  columns: ColumnType<RecordType>
  data: any
}

export interface ColumnType<RecordType> {
  title?: ColumnTitle<RecordType>
  // Sorter
  sorter?:
    | boolean
    | CompareFn<RecordType>
    | {
    compare?: CompareFn<RecordType>;
    /** Config multiple sorter order priority */
    multiple?: number
  };
  sortOrder?: SortOrder;
  defaultSortOrder?: SortOrder;
  sortDirections?: SortOrder[];
  showSorterTooltip?: boolean | TooltipProps
}
