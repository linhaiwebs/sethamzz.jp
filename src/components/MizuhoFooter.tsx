import { Link } from 'react-router-dom';

export default function MizuhoFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 md:py-6 mt-2" style={{ color: '#000000' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-artistic" style={{ color: '#000000' }}>株式会社メッセ</h2>
          <p className="text-sm md:text-base mb-6" style={{ color: '#000000', opacity: 0.9 }}>
            &copy; {currentYear} Messe Co., Ltd.. All rights reserved.
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
                  お知的についで
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

        <div className="border-t pt-8 text-center text-xs leading-relaxed" style={{ borderColor: 'rgba(0,0,0,0.3)', color: '#000000', opacity: 0.7 }}>
          <p className="mb-2">【重要】本サービスで提供される情報は教育・情報提供のみを目的としており、特定の金融商品の売買や投資勧誘を行うものではありません。</p>
          <p className="mb-2">株式投資には価格変動リスクがあり、投資元本を割り込む可能性があります。</p>
          <p className="mb-2">投資に関する最終決定は、利用者ご自身の責任と判断で行ってください。</p>
          <p>当サービス提供者は金融商品取引業者ではなく、個別の投資助言を行うことはできません。投資を行う際は、必ず金融商品取引業者または専門家にご相談ください。</p>
        </div>
      </div>
    </footer>
  );
}
