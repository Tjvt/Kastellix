import { ref } from 'vue';

export interface Toast {
  id: number;
  message: string;
  variant?: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
}

const toasts = ref<Toast[]>([]);
let count = 0;

export function useToast() {
  const add = (message: string, variant: Toast['variant'] = 'info', duration = 3000) => {
    const id = count++;
    toasts.value.push({ id, message, variant, duration });
    
    if (duration > 0) {
      setTimeout(() => {
        remove(id);
      }, duration);
    }
  };

  const remove = (id: number) => {
    toasts.value = toasts.value.filter(t => t.id !== id);
  };

  const success = (msg: string) => add(msg, 'success');
  const error = (msg: string) => add(msg, 'error');
  const info = (msg: string) => add(msg, 'info');
  const warning = (msg: string) => add(msg, 'warning');

  return {
    toasts,
    add,
    remove,
    success,
    error,
    info,
    warning
  };
}
