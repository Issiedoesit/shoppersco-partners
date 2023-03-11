import { create } from 'zustand';
import { devtools } from 'zustand/middleware';



const useNewOrderStore = create(devtools(
(set)=>({
    isNewOrderModalOpen: false,
    currentNewOrderState: '',
    setCurrentNewOrderState: (val) => set({currentNewOrderState: val }),
    changeNewOrderModalState: () => set((state)=> ({isNewOrderModalOpen: !(state.isNewOrderModalOpen)}))
})))


export default useNewOrderStore