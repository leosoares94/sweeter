import create from "zustand";
import { devtools } from "zustand/middleware";
import { mountStoreDevtool } from "simple-zustand-devtools";

export interface DataFilter {
  id: string;
  type: string;
  values: string[];
  includes: boolean;
  condition: string;
}

export interface BooleanFilter {
  id: string;
  type: string;
  include: boolean;
  condition: string;
}

export interface BuilderState {
  dataFilters: DataFilter[];
  booleanFilters: BooleanFilter[];
  addDataFilter: (dataFilter: DataFilter) => void;
  updateDataFilter: (
    id: string,
    field: string,
    data: string[] | boolean | string
  ) => void;
  removeDataFilter: (id: string) => void;
  addBooleanFilter: (booleanFilter: BooleanFilter) => void;
}

export const useBuilder = create<BuilderState>()(
  devtools((set) => ({
    dataFilters: [],
    booleanFilters: [],
    addDataFilter: (dataFilter) => {
      set((state) => ({
        ...state,
        dataFilters: [...state.dataFilters, dataFilter],
      }));
    },
    updateDataFilter: (id, field, data) => {
      set((state) => ({
        ...state,
        dataFilters: state.dataFilters.map((item) => {
          if (item.id === id) {
            return { ...item, [field]: data };
          } else {
            return item;
          }
        }),
      }));
    },
    removeDataFilter: (id) => {
      set((state) => ({
        ...state,
        dataFilters: state.dataFilters.filter((item) => item.id !== id),
      }));
    },
    addBooleanFilter: (booleanFilter) => {
      set((state) => ({
        ...state,
        booleanFilters: [...state.booleanFilters, booleanFilter],
      }));
    },
  }))
);

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Builder", useBuilder);
}
