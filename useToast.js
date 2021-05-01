import { inject } from "vue";

export default function useToast() {
  const toast = inject("toast");
  return toast;
}
