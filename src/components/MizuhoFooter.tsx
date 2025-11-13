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

        <div className="border-t pt-6 mb-8" style={{ borderColor: 'rgba(0,0,0,0.3)' }}>
          <div className="bg-red-50 border-2 border-red-400 rounded-lg p-6 mb-6">
            <h3 className="text-base md:text-lg font-bold mb-3 text-red-900 flex items-center justify-center gap-2">
              <span className="text-2xl">⚠️</span>
              <span>重要：本サービスは投資助言ではありません</span>
            </h3>
            <div className="text-xs md:text-sm leading-relaxed space-y-2 text-gray-900">
              <p className="font-bold text-red-800">
                本サービスで提供される情報は、教育・学習用の参考情報のみを目的としており、特定の金融商品の売買推奨、投資勧誘、投資助言を一切行いません。
              </p>
              <p>
                株式投資には価格変動リスク、信用リスク、流動性リスク等があり、投資元本を大幅に割り込む可能性があります。
              </p>
              <p className="font-semibold">
                投資判断は必ずご自身の責任で行ってください。当サービスの利用により生じた損害について、当社は一切の責任を負いません。
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border-2 border-amber-400 rounded-lg p-5 mb-6">
            <h3 className="text-sm md:text-base font-bold mb-3 text-amber-900 text-center">
              金融商品取引法に基づく表示
            </h3>
            <div className="text-xs md:text-sm leading-relaxed space-y-2 text-gray-800">
              <p>
                <strong>登録業者ではありません：</strong>当社は金融商品取引法第29条の登録を受けた金融商品取引業者ではありません。
              </p>
              <p>
                <strong>提供しないサービス：</strong>投資助言業務、投資一任業務、金融商品仲介業務、証券取引の勧誘行為は一切行いません。
              </p>
              <p>
                <strong>AI分析について：</strong>AI による分析結果は過去のデータに基づく参考情報であり、将来の投資成果を保証するものではありません。
              </p>
              <p className="font-semibold text-amber-900">
                実際に投資を行う際は、証券会社等の金融商品取引業者、または税理士・弁護士等の専門家に必ずご相談ください。
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-300 rounded-lg p-5">
            <h3 className="text-sm font-bold mb-2 text-blue-900 text-center">
              データ出典と更新について
            </h3>
            <div className="text-xs leading-relaxed text-gray-700 text-center">
              <p>
                株価データは東京証券取引所等の公開市場情報を使用しています（準リアルタイム、数分の遅延あり）。
              </p>
              <p className="mt-1">
                データの正確性・完全性・適時性について保証するものではありません。
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
