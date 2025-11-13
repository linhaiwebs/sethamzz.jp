import { TrendingUp } from 'lucide-react';
import { StockInfo, StockPrice } from '../types/stock';

interface CompactStockDisplayProps {
  info: StockInfo;
  latestPrice?: StockPrice;
  onAnalyze?: () => void;
}

export default function CompactStockDisplay({ info, latestPrice, onAnalyze }: CompactStockDisplayProps) {
  const isPositive = info.change.includes('+') || parseFloat(info.change) > 0;

  return (
    <div className="relative">
      <div
        className="rounded-2xl shadow-lg p-6 border border-blue-300 relative"
        style={{
          backgroundImage: 'url(/images/stock.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <img
              src="/images/left.png"
              alt=""
              className="w-8 h-8 object-contain"
            />
            <h2 className="text-xl font-bold font-artistic" style={{ color: '#000000' }}>
              {info.name} ({info.code})
            </h2>
            <img
              src="/images/right.png"
              alt=""
              className="w-8 h-8 object-contain"
            />
          </div>
          <p className="text-sm mt-1" style={{ color: '#000000' }}>{info.timestamp}</p>
        </div>

        <div className="flex items-start justify-between mb-4 gap-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-2">
              <div className="text-3xl font-bold" style={{ color: '#000000' }}>
                ¥{info.price}
              </div>
              <TrendingUp className="w-6 h-6" style={{ color: '#000000' }} />
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className={`font-semibold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                {info.change}
              </span>
              <span className={`font-semibold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                {info.changePercent}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2 items-end">
            <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">
              <span className="text-sm font-medium" style={{ color: '#000000' }}>{info.market}</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">
              <span className="text-sm font-medium" style={{ color: '#000000' }}>{info.industry}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-1.5 text-xs mb-4">
          <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg py-1 px-1">
            <span style={{ color: '#22c55e' }} className="mb-0.5 font-medium">PER</span>
            <span className="font-semibold" style={{ color: '#000000' }}>{info.per || 'N/A'}</span>
          </div>
          <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg py-1 px-1">
            <span style={{ color: '#22c55e' }} className="mb-0.5 font-medium">PBR</span>
            <span className="font-semibold" style={{ color: '#000000' }}>{info.pbr || 'N/A'}</span>
          </div>
          <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg py-1 px-1">
            <span style={{ color: '#22c55e' }} className="mb-0.5 font-medium">配当</span>
            <span className="font-semibold" style={{ color: '#000000' }}>{info.dividend || 'N/A'}</span>
          </div>
          <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg py-1 px-1">
            <span style={{ color: '#22c55e' }} className="mb-0.5 font-medium">時価総額</span>
            <span className="font-semibold text-[10px]" style={{ color: '#000000' }}>{info.marketCap || 'N/A'}</span>
          </div>
        </div>

        <div className="w-full h-0.5 bg-white/40 mb-4"></div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm mb-6">
          <div className="flex justify-between gap-1">
            <span style={{ color: '#22c55e' }} className="font-medium">始値</span>
            <span className="font-semibold" style={{ color: '#000000' }}>{latestPrice?.open || info.price}</span>
          </div>
          <div className="flex justify-between gap-1">
            <span style={{ color: '#22c55e' }} className="font-medium">高値</span>
            <span className="font-semibold" style={{ color: '#000000' }}>{latestPrice?.high || info.price}</span>
          </div>
          <div className="flex justify-between gap-1">
            <span style={{ color: '#22c55e' }} className="font-medium">終値</span>
            <span className="font-semibold" style={{ color: '#000000' }}>{latestPrice?.close || info.price}</span>
          </div>
          <div className="flex justify-between gap-1">
            <span style={{ color: '#22c55e' }} className="font-medium">安値</span>
            <span className="font-semibold" style={{ color: '#000000' }}>{latestPrice?.low || info.price}</span>
          </div>
          <div className="flex justify-between gap-1">
            <span style={{ color: '#22c55e' }} className="font-medium">前日比</span>
            <span className="font-semibold" style={{ color: '#000000' }}>+{info.change}</span>
          </div>
          <div className="flex justify-between gap-1">
            <span style={{ color: '#22c55e' }} className="font-medium">売買高</span>
            <span className="font-semibold" style={{ color: '#000000' }}>{latestPrice?.volume || 'N/A'}</span>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={onAnalyze}
            className="w-full font-bold py-3 px-6 rounded-xl transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{
              backgroundImage: 'url(/images/button.png)',
              backgroundSize: '100% 100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              color: '#000000',
              border: 'none'
            }}
          >
            無料AI診断を開始
          </button>
          <p className="text-center mt-3 text-xs font-light" style={{ color: '#000000', opacity: 0.7 }}>
            教育・学習用の参考情報として提供
          </p>
        </div>
      </div>
    </div>
  );
}
