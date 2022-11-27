import create from "zustand";
import { devtools } from "zustand/middleware";
import { mountStoreDevtool } from "simple-zustand-devtools";

export interface Filter {
  id: string;
  tagName: string;
  values?: string[];
  includes: boolean;
  condition: string;
}

export interface BuilderState {
  dataFilters: Filter[];
  booleanFilters: Filter[];
  contentFilters: Filter[];
  addFilter: (data: Filter, filterName: string) => void;
  updateFilter: (
    id: string,
    field: string,
    data: string[] | boolean | string,
    filterName: string
  ) => void;
  removeFilter: (id: string, filterName: string) => void;
  resetBuilder: () => void;
}

export const useBuilder = create<BuilderState>()(
  devtools((set) => ({
    dataFilters: [],
    booleanFilters: [],
    contentFilters: [],
    addFilter: (data, filterName) => {
      set((state) => ({
        ...state,
        [filterName]: [
          ...(state[filterName as keyof BuilderState] as any),
          data,
        ],
      }));
    },
    updateFilter: (id, field, data, filterName) => {
      set((state) => ({
        ...state,
        [filterName]: (state[filterName as keyof BuilderState] as Filter[]).map(
          (item) => {
            if (item.id === id) {
              return { ...item, [field]: data };
            } else {
              return item;
            }
          }
        ),
      }));
    },
    removeFilter: (id, filterName) => {
      set((state) => ({
        ...state,
        [filterName]: (
          state[filterName as keyof BuilderState] as Filter[]
        ).filter((item: Filter) => item.id !== id),
      }));
    },
    resetBuilder: () => {
      set((state) => ({
        ...state,
        dataFilters: [],
        booleanFilters: [],
        contentFilters: []
      }))
    }
  }))
);

if (import.meta.env.NODE_ENV === "development") {
  mountStoreDevtool("Builder", useBuilder);
}
