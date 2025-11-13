import { Sparkles, Zap } from 'lucide-react';
import GradientButton from './GradientButton';

interface PulsingButtonProps {
  onClick: () => void;
  stockName?: string;
  disabled?: boolean;
}

export default function PulsingButton({ onClick, stockName = '', disabled = false }: PulsingButtonProps) {
  const buttonText = stockName ? `【${stockName}】の参考情報を表示` : '参考情報を表示';

  const handleClick = () => {
    onClick();
  };

  return (
    <div className="flex justify-center px-4 my-8">
      <div className="max-w-lg w-full">
        <button
          onClick={handleClick}
          disabled={disabled}
          className="disabled:opacity-50 disabled:cursor-not-allowed w-full transition-all duration-300 hover:opacity-90 active:scale-95 font-bold py-5 px-8 rounded-xl"
          style={{
            backgroundImage: 'url(/images/button.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            color: '#000000',
            border: 'none'
          }}
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6" />
              <span className="text-lg">{buttonText}</span>
              <Zap className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold">※教育・学習用の参考情報</span>
          </div>
        </button>
      </div>
    </div>
  );
}
