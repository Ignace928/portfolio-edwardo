import { cn } from '@/lib/utils';
import { Button } from './button';

//======================================
export const BtnEyes = ({ ...props }: React.ComponentProps<"button">) => {
  return (
    <div className="relative overflow-hidden rounded-full bg-white shadow border group border-zinc-400 p-0.5">
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite_reverse] bg-[conic-gradient(from_0deg_at_50%_50%,#000_0%,#fff_5%)] group-hover:bg-none" />
      <Button
        {...props}
        className={cn(
          'h-10 w-full px-2 rounded-full font-semibold text-zinc-800 backdrop-blur-xl bg-zinc-50 ',
          props.className,
        )}
      />
    </div>
  );
};