import { ArrowLeft, Building, Target, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-secondary-green hover:text-dark-green mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          トップページに戻る
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-pale-green p-3 rounded-lg">
              <Building className="w-6 h-6 text-dark-green" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 font-artistic">運営会社情報</h1>
          </div>

          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">AI株式診断サービスについて</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                AI株式診断サービスは、実際のAI技術を使用して株式市場の情報を分析し、
                無料で教育・学習用の参考情報を提供するサービスです。
              </p>
              <p className="text-gray-700 leading-relaxed">
                当サービスは金融商品の売買推奨や投資助言を一切行いません。
                株式市場の理解と学習を目的とした情報提供のみを行います。
              </p>
            </section>

            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-secondary-green" />
                <h2 className="text-xl font-bold text-gray-900">ミッション</h2>
              </div>
              <div className="bg-pale-green rounded-lg p-6">
                <p className="text-gray-800 font-semibold mb-3">
                  「実際AIを使用した無料の教育・学習用情報提供」
                </p>
                <p className="text-gray-700 leading-relaxed">
                  私たちは、複雑な株式市場の情報を実際のAI技術で分析し、
                  利用者の皆様が株式市場を学ぶための参考情報を無料で提供することを使命としています。
                </p>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-secondary-green" />
                <h2 className="text-xl font-bold text-gray-900">サービスの特徴</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-pale-green to-green-100 rounded-lg p-4 border border-primary-green/30">
                  <h3 className="font-bold text-gray-900 mb-2">AI分析技術</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    最新の機械学習アルゴリズムを使用し、
                    大量の市場データから有用な情報を抽出します。
                  </p>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-4 border border-accent-emerald/30">
                  <h3 className="font-bold text-gray-900 mb-2">使いやすいUI</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    直感的なインターフェースで、初心者からプロまで
                    誰でも簡単に利用できます。
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border border-success-green/30">
                  <h3 className="font-bold text-gray-900 mb-2">準リアルタイム</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    市場データを準リアルタイムで更新し、
                    常に最新の情報を提供します。
                  </p>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-4 border border-teal-400/30">
                  <h3 className="font-bold text-gray-900 mb-2">無料で利用可能</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    基本機能は無料でご利用いただけます。
                    投資情報へのアクセスを民主化します。
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-secondary-green" />
                <h2 className="text-xl font-bold text-gray-900">私たちの価値観</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-secondary-green mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="text-gray-900">透明性</strong>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      AI分析の手法や限界について、明確に説明します。
                      利用者の皆様が正しく情報を理解できるよう努めます。
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-secondary-green mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="text-gray-900">中立性</strong>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      特定の銘柄を推奨したり、売買を勧誘することはありません。
                      客観的な情報提供に徹します。
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-secondary-green mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="text-gray-900">継続的改善</strong>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      利用者の皆様からのフィードバックを真摯に受け止め、
                      サービスの改善に努めます。
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-secondary-green mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="text-gray-900">コンプライアンス</strong>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      金融商品取引法をはじめとする関連法規を遵守し、
                      適切なサービス運営を行います。
                    </p>
                  </div>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">データ提供について</h2>
              <div className="bg-pale-green rounded-lg p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-3">データ出典</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  当サービスで提供される株式情報は、以下の公開市場情報を基に構成されています：
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>東京証券取引所等の公開市場データ（準リアルタイム）</li>
                  <li>各種財務指標（PER、PBR、配当利回り等）</li>
                  <li>出来高、株価推移等の取引データ</li>
                </ul>
                <p className="text-sm text-gray-600 mt-3">
                  ※データ更新頻度: 準リアルタイム（数分遅延の可能性があります）
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">会社概要</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <dl className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-start">
                    <dt className="font-semibold text-gray-900 w-32 flex-shrink-0">会社名</dt>
                    <dd className="text-gray-700">株式会社メッセ</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start">
                    <dt className="font-semibold text-gray-900 w-32 flex-shrink-0">会社名（英語）</dt>
                    <dd className="text-gray-700">Messe Co., Ltd.</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start">
                    <dt className="font-semibold text-gray-900 w-32 flex-shrink-0">郵便番号</dt>
                    <dd className="text-gray-700">104-0031</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start">
                    <dt className="font-semibold text-gray-900 w-32 flex-shrink-0">住所</dt>
                    <dd className="text-gray-700">中央区京橋3丁目9-2 宝国ビル3F</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start">
                    <dt className="font-semibold text-gray-900 w-32 flex-shrink-0">住所（英語）</dt>
                    <dd className="text-gray-700">3-9-2 Kyobashi, Chuo-ku, Tokyo 104-0031, Hokoku Building 3F</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start">
                    <dt className="font-semibold text-gray-900 w-32 flex-shrink-0">電話番号</dt>
                    <dd className="text-gray-700">03-5524-1500</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start">
                    <dt className="font-semibold text-gray-900 w-32 flex-shrink-0">メールアドレス</dt>
                    <dd className="text-gray-700">gonzalezbettyuwxdc4870@gmail.com</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start">
                    <dt className="font-semibold text-gray-900 w-32 flex-shrink-0">事業内容</dt>
                    <dd className="text-gray-700">
                      株式市場情報の分析および提供<br />
                      AI技術を活用した教育・学習用情報サービスの開発・運営
                    </dd>
                  </div>
                </dl>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">重要なお知らせ</h2>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                <p className="text-amber-900 font-semibold mb-2">金融商品取引業者ではありません</p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  当サービスは無料のAI診断ツールであり、金融商品取引法第29条の登録を受けた金融商品取引業者ではありません。
                  投資助言業務、投資一任業務、金融商品仲介業務、金融商品の売買推奨を一切行いません。
                  提供される情報は、実際のAI処理による教育・学習用の参考情報です。
                </p>
              </div>
            </section>

            <div className="bg-pale-green rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">お問い合わせ</h3>
              <p className="text-sm text-gray-700 mb-3">
                サービスに関するご質問、ご意見、お問い合わせは、
                お問い合わせフォームよりご連絡ください。
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-green text-white rounded-lg hover:bg-dark-green transition-colors text-sm"
              >
                お問い合わせフォームへ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
