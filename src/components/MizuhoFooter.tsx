import { Link } from 'react-router-dom';

export default function MizuhoFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 md:py-6 mt-2" style={{ color: '#000000' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-artistic" style={{ color: '#000000' }}>株式会社メッセ</h2>
          <p className="text-sm md:text-base mb-2" style={{ color: '#000000', opacity: 0.9 }}>
            &copy; {currentYear} Messe Co., Ltd. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: '#000000', opacity: 0.7 }}>
            株式会社メッセ｜104-0031 中央区京橋3丁目9-2 宝国ビル3F｜TEL: 03-5524-1500
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:gap-12 mb-10">
          <div>
            <h3 className="text-lg font-bold mb-4 border-b pb-2 font-artistic" style={{ color: '#000000', borderColor: 'rgba(0,0,0,0.3)' }}>
              法人情報
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="transition-colors" style={{ color: '#000000' }}>
                  会社概要
                </Link>
              </li>
              <li>
                <Link to="/team" className="transition-colors" style={{ color: '#000000' }}>
                  チーム
                </Link>
              </li>
              <li>
                <Link to="/careers" className="transition-colors" style={{ color: '#000000' }}>
                  採用情報
                </Link>
              </li>
              <li>
                <Link to="/press" className="transition-colors" style={{ color: '#000000' }}>
                  プレスリリース
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 border-b pb-2 font-artistic" style={{ color: '#000000', borderColor: 'rgba(0,0,0,0.3)' }}>
              サイトメニュー
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/terms" className="transition-colors" style={{ color: '#000000' }}>
                  利用規約
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="transition-colors" style={{ color: '#000000' }}>
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link to="/specified-commercial-transaction-act" className="transition-colors" style={{ color: '#000000' }}>
                  特定商取引法に基づく表記
                </Link>
              </li>
              <li>
                <Link to="/risk-disclosure" className="transition-colors" style={{ color: '#000000' }}>
                  リスク開示
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="transition-colors" style={{ color: '#000000' }}>
                  免責事項
                </Link>
              </li>
              <li>
                <Link to="/faq" className="transition-colors" style={{ color: '#000000' }}>
                  よくある質問
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors" style={{ color: '#000000' }}>
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link to="/support" className="transition-colors" style={{ color: '#000000' }}>
                  サポート
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-6 mb-6" style={{ borderColor: 'rgba(0,0,0,0.3)' }}>
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
            <p className="text-xs md:text-sm text-gray-800 text-center leading-relaxed">
              <span className="font-bold text-red-900">【重要】</span>本サービスで提供される情報は教育・学習用の参考情報のみを目的としており、投資助言・投資勧誘を一切行いません。株式投資には価格変動リスクがあり、投資元本を割り込む可能性があります。投資判断は必ずご自身の責任で行ってください。当社は金融商品取引業者ではなく、投資助言業務を行うことはできません。
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
