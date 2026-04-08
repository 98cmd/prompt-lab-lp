"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Sparkle,
  ArrowRight,
  Robot,
  FileText,
  Users,
  MagicWand,
  RocketLaunch,
  Intersect,
  TrendUp,
  ArrowUpRight,
  Handshake,
  CaretDown,
  CheckCircle,
  WarningCircle,
  WarningOctagon,
  Infinity as InfinityIcon,
  Target,
  CalendarX,
  Strategy,
  ArrowFatLinesRight,
  LockKey,
  Brain,
  Keyboard,
  UserMinus,
  List,
  X,
  Clock,
  Lightning,
  Hourglass,
} from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

export default function ClientPage() {
  const mainRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // スクロールで各セクション表示
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      });

      // ヒーローのスタガー
      gsap.from(".hero-stagger > *", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2,
      });

      // ヒーローダッシュボード
      gsap.from(".hero-dashboard", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef}>
      {/* 背景バブル */}
      <div className="fixed inset-0 w-full h-full z-[-1] overflow-hidden pointer-events-none">
        <div className="bg-blob animate-float-slow mix-blend-multiply" style={{ background: "#7C5CFC", width: 800, height: 800, top: "-10%", right: "-10%", opacity: 0.25 }} />
        <div className="bg-blob animate-float-med mix-blend-multiply" style={{ background: "#60A5FA", width: 600, height: 600, bottom: "-20%", left: "-10%", opacity: 0.18 }} />
        <div className="bg-blob animate-float-fast mix-blend-multiply" style={{ background: "#F472B6", width: 500, height: 500, top: "40%", left: "20%", opacity: 0.08 }} />
      </div>

      {/* ナビゲーション */}
      <nav className="fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="glass-panel rounded-full px-4 md:px-6 py-2.5 md:py-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-white">
                <Sparkle size={18} weight="fill" />
              </div>
              <span className="font-[family-name:var(--font-outfit)] font-semibold text-lg tracking-tight">
                AI Prompt LAB
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#problem" className="hover:text-brand transition-colors">課題</a>
              <a href="#services" className="hover:text-brand transition-colors">サービス</a>
              <a href="#cases" className="hover:text-brand transition-colors">導入事例</a>
              <a href="#pricing" className="hover:text-brand transition-colors">料金</a>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="hidden sm:inline-flex bg-navydark text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-brand transition-colors min-h-[44px] items-center"
                style={{ boxShadow: "0 4px 14px 0 rgba(124,92,252,0.39)" }}
              >
                無料相談
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden w-11 h-11 flex items-center justify-center rounded-full hover:bg-navydark/5 transition-colors"
                aria-label="メニュー"
              >
                {menuOpen ? <X size={22} /> : <List size={22} />}
              </button>
            </div>
          </div>

          {/* モバイルメニュー */}
          {menuOpen && (
            <div className="md:hidden mt-2 glass-panel rounded-2xl p-4 flex flex-col gap-1">
              {[
                { href: "#problem", label: "課題" },
                { href: "#services", label: "サービス" },
                { href: "#cases", label: "導入事例" },
                { href: "#pricing", label: "料金" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm font-medium hover:bg-brand/10 hover:text-brand transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block mt-2 text-center bg-navydark text-white px-4 py-3 rounded-full text-sm font-medium hover:bg-brand transition-colors"
              >
                無料相談
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* ヒーロー */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-20 lg:pt-48 lg:pb-32 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10 space-y-8 hero-stagger">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-sm text-brand font-medium">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
              月額制 AIエージェント導入パートナー
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.15] tracking-tight">
              労働集約型から、
              <br />
              <span className="text-brand">AI主導</span>の組織へ。
            </h1>

            <p className="text-lg lg:text-xl text-navydark/70 leading-relaxed max-w-lg">
              30人が抱えるルーティン業務を、2体のAIエージェントが代替。
              私たちはツールを売るのではなく、業務フローそのものを再起動させます。
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="bg-brand text-white px-8 py-4 rounded-full font-medium hover:bg-navydark transition-all duration-300 flex items-center gap-2"
                style={{ boxShadow: "0 8px 20px -4px rgba(124,92,252,0.5)" }}
              >
                変革を始める
                <ArrowRight size={18} />
              </a>
              <a href="#cases" className="glass-button px-8 py-4 rounded-full font-medium flex items-center gap-2">
                導入事例を見る
              </a>
            </div>

            <div className="pt-12 border-t border-navydark/10 flex items-center gap-6">
              <div className="text-sm">
                <span className="block font-[family-name:var(--font-outfit)] font-bold text-2xl">92%</span>
                <span className="text-navydark/60">平均工数削減率</span>
              </div>
              <div className="w-px h-10 bg-navydark/10" />
              <div className="text-sm">
                <span className="block font-[family-name:var(--font-outfit)] font-bold text-2xl">0</span>
                <span className="text-navydark/60">導入・初期費用</span>
              </div>
            </div>
          </div>

          {/* ダッシュボードUI */}
          <div className="relative z-10 w-full h-[380px] sm:h-[450px] md:h-[500px] lg:h-[600px] hero-dashboard">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-16px)] max-w-[500px] aspect-[4/3] glass-panel rounded-2xl md:rounded-3xl p-4 md:p-6 flex flex-col gap-3 md:gap-4 z-20">
              <div className="flex justify-between items-center border-b border-navydark/5 pb-4">
                <div className="flex items-center gap-3">
                  <Robot size={24} className="text-brand" />
                  <div>
                    <h3 className="font-[family-name:var(--font-outfit)] font-semibold text-sm">AIエージェント稼働状況</h3>
                    <p className="text-[10px] text-navydark/50">リアルタイム最適化実行中</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-green-500/10 text-green-600 px-3 py-1 rounded-full text-xs font-[family-name:var(--font-outfit)] font-medium">
                  <div className="pulse-dot" />
                  正常稼働中
                </div>
              </div>

              <div className="flex-1 space-y-3 pt-2">
                <div className="bg-white/40 rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600">
                      <FileText size={16} />
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-outfit)] text-xs font-bold">請求書処理</p>
                      <p className="text-[10px] text-navydark/60">エージェント #01</p>
                    </div>
                  </div>
                  <span className="font-[family-name:var(--font-outfit)] text-xs text-green-600 font-semibold">0.2秒で完了</span>
                </div>
                <div className="bg-white/40 rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
                      <Users size={16} />
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-outfit)] text-xs font-bold">問い合わせ対応</p>
                      <p className="text-[10px] text-navydark/60">エージェント #02</p>
                    </div>
                  </div>
                  <span className="font-[family-name:var(--font-outfit)] text-xs text-brand font-semibold">生成中...</span>
                </div>
              </div>
            </div>

            {/* フロートカード */}
            <div className="absolute -top-2 right-0 sm:-top-4 sm:-right-4 lg:-right-8 w-36 sm:w-48 glass-panel rounded-xl sm:rounded-2xl p-3 sm:p-4 z-30 animate-float-slow" style={{ boxShadow: "0 12px 40px rgba(26,26,46,0.08)" }}>
              <p className="text-[10px] text-navydark/60 font-[family-name:var(--font-outfit)] font-semibold uppercase tracking-wider mb-1">人的工数の削減</p>
              <span className="font-[family-name:var(--font-outfit)] font-bold text-2xl sm:text-3xl">-95%</span>
            </div>

            <div className="absolute -bottom-4 left-0 sm:-bottom-8 sm:-left-4 lg:-left-12 w-52 sm:w-64 glass-panel rounded-xl sm:rounded-2xl p-3 sm:p-4 z-30 animate-float-med" style={{ boxShadow: "0 12px 40px rgba(26,26,46,0.08)" }}>
              <p className="text-[10px] text-navydark/60 font-[family-name:var(--font-outfit)] font-semibold uppercase tracking-wider mb-2">コスト推移</p>
              <div className="h-16 w-full flex items-end justify-between gap-1">
                {[90, 85, 80].map((h, i) => (
                  <div key={`before-${i}`} className="w-full bg-navydark/20 rounded-t-sm" style={{ height: `${h}%` }} />
                ))}
                {[30, 15, 5].map((h, i) => (
                  <div key={`after-${i}`} className="w-full bg-brand rounded-t-sm" style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="flex justify-between mt-2 pt-2 border-t border-navydark/5 text-[9px] font-[family-name:var(--font-outfit)] text-navydark/40">
                <span>導入前</span>
                <span>導入後</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 課題提起 */}
      <section id="problem" className="py-24 lg:py-32 relative">
        <div className="max-w-4xl mx-auto px-6 text-center reveal">
          <span className="font-[family-name:var(--font-outfit)] uppercase tracking-widest text-brand text-sm font-semibold mb-6 block">
            The Paradigm Shift
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight mb-8">
            「人がやるべきではない仕事」に、
            <br />
            まだコストをかけていませんか？
          </h2>
          <p className="text-lg text-navydark/70 leading-relaxed mb-12">
            データの転記、定型メールの返信、システム間の情報連携。
            <br />
            これらはもはや人間の仕事ではありません。
            <br />
            AIエージェントに任せることで、人間は「創造」と「戦略」に集中すべきです。
          </p>
        </div>
      </section>

      {/* ========== セクション1: The Cost of Inaction（恐怖） ========== */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-baseDark/50 rounded-none pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="mb-16 max-w-2xl reveal">
            <p className="font-[family-name:var(--font-outfit)] font-medium tracking-widest text-warning uppercase text-sm mb-4 flex items-center gap-2">
              <WarningCircle size={18} /> The Cost of Inaction
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight mb-6">
              行動しない<span className="text-warning">代償</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              AI導入を先送りすることは、現状維持ではありません。指数関数的に進化する市場において、それは確実な「後退」を意味します。
            </p>
          </div>

          {/* タイムライン */}
          <div className="relative w-full flex flex-col pt-10">
            {/* 縦線 */}
            <div className="absolute left-[27px] sm:left-[39px] lg:left-1/2 top-0 bottom-0 w-px lg:-translate-x-1/2 pointer-events-none z-0">
              <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 2 100">
                <line x1="1" y1="0" x2="1" y2="100" className="dash-line" stroke="#D96C6C" strokeWidth="2" strokeOpacity="0.3" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>

            {/* 2026 */}
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center w-full mb-12 lg:mb-24 reveal">
              <div className="hidden lg:flex w-1/2 justify-end pr-16 text-right">
                <div className="font-[family-name:var(--font-outfit)] text-7xl font-bold text-black/5 leading-none">2026</div>
              </div>
              <div className="absolute left-0 lg:relative lg:left-auto w-14 h-14 sm:w-20 sm:h-20 bg-baseDark rounded-full border border-white/50 flex items-center justify-center backdrop-blur-md lg:-translate-x-0">
                <div className="w-10 h-10 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                  <span className="font-[family-name:var(--font-outfit)] font-bold text-xl text-navydark">26</span>
                </div>
              </div>
              <div className="w-full lg:w-1/2 pl-20 sm:pl-28 lg:pl-16">
                <div className="glass-panel-darker rounded-2xl p-8 relative overflow-hidden hover:border-warning/30 transition-colors">
                  <div className="absolute top-0 left-0 w-1 h-full bg-warning/50" />
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                    <TrendUp size={24} className="text-warning" />
                    格差の顕在化
                  </h3>
                  <p className="text-muted leading-relaxed">
                    人件費の高騰が経営を圧迫。一方、競合他社はルーチンワークのAI代替を完了し、利益率に明確な差が生まれ始めます。
                  </p>
                </div>
              </div>
            </div>

            {/* 2027 */}
            <div className="relative z-10 flex flex-col lg:flex-row-reverse items-start lg:items-center w-full mb-12 lg:mb-24 reveal">
              <div className="hidden lg:flex w-1/2 pl-16 text-left">
                <div className="font-[family-name:var(--font-outfit)] text-7xl font-bold text-black/5 leading-none">2027</div>
              </div>
              <div className="absolute left-0 lg:relative lg:left-auto w-14 h-14 sm:w-20 sm:h-20 bg-baseDark rounded-full border border-white/50 flex items-center justify-center backdrop-blur-md">
                <div className="w-10 h-10 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                  <span className="font-[family-name:var(--font-outfit)] font-bold text-xl text-navydark">27</span>
                </div>
              </div>
              <div className="w-full lg:w-1/2 pl-20 sm:pl-28 lg:pr-16 lg:pl-0 text-left lg:text-right">
                <div className="glass-panel-darker rounded-2xl p-8 relative overflow-hidden hover:border-warning/50 transition-colors">
                  <div className="absolute top-0 right-0 w-1 h-full bg-warning/70 hidden lg:block" />
                  <div className="absolute top-0 left-0 w-1 h-full bg-warning/70 lg:hidden" />
                  <h3 className="text-xl font-bold mb-3 flex items-center lg:justify-end gap-3">
                    <RocketLaunch size={24} className="text-warning" />
                    10倍のスピード格差
                  </h3>
                  <p className="text-muted leading-relaxed">
                    「AIネイティブ」なプロセスを構築した企業は、事業展開の速度が10倍に。人力の手作業に頼る組織は、市場の変化に取り残されます。
                  </p>
                </div>
              </div>
            </div>

            {/* 2030 */}
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center w-full reveal">
              <div className="hidden lg:flex w-1/2 justify-end pr-16 text-right">
                <div className="font-[family-name:var(--font-outfit)] text-7xl font-bold text-black/5 leading-none">2030</div>
              </div>
              <div className="absolute left-0 lg:relative lg:left-auto w-14 h-14 sm:w-20 sm:h-20 bg-baseDark rounded-full border border-white/50 flex items-center justify-center backdrop-blur-md">
                <div className="w-10 h-10 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-warning">
                  <span className="font-[family-name:var(--font-outfit)] font-bold text-xl text-warning">30</span>
                </div>
              </div>
              <div className="w-full lg:w-1/2 pl-20 sm:pl-28 lg:pl-16">
                <div className="px-8 py-10 rounded-2xl bg-white border border-warning/20 relative overflow-hidden" style={{ boxShadow: "0 16px 48px rgba(217,108,108,0.1)" }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-warning/5 to-transparent pointer-events-none" />
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-warning relative z-10">
                    <WarningOctagon size={28} weight="fill" />
                    644万人不足の絶壁
                  </h3>
                  <p className="text-navydark font-medium leading-relaxed mb-4 relative z-10">
                    日本の深刻な労働力不足のピーク。
                  </p>
                  <p className="text-muted leading-relaxed text-sm relative z-10">
                    新規採用は困難を極め、コア業務すら停止のリスクに直面。この時点からAIへの移行を試みても、基盤の差はもはや埋まりません。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== セクション2: After the Shift（希望） ========== */}
      <section className="py-24 lg:py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20 reveal">
            <p className="font-[family-name:var(--font-outfit)] font-medium tracking-widest text-brand uppercase text-sm mb-4 flex items-center justify-center gap-2">
              <Sparkle size={18} weight="fill" /> After the Shift
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight mb-6">
              AI実装後の<span className="text-brand">世界</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              AIプロンプトラボが提供するのは、単なるツールの導入ではありません。人間がより「創造的で本質的な仕事」に集中できるアーキテクチャへのシフトです。
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {/* コスト比較 */}
            <div className="comparison-row flex flex-col md:flex-row w-full gap-4 relative group cursor-default reveal">
              <div className="comparison-left w-full md:w-1/2 glass-panel p-8 rounded-3xl transition-all duration-500 flex items-center gap-6" style={{ background: "rgba(255,255,255,0.3)" }}>
                <div className="w-14 h-14 rounded-full bg-black/5 flex items-center justify-center text-muted shrink-0">
                  <UserMinus size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest text-muted/60 mb-1">人力のみ</p>
                  <p className="text-muted line-through decoration-muted/40 decoration-2">外注・人件費: 300万/月</p>
                </div>
              </div>
              <div className="comparison-right w-full md:w-1/2 glass-panel p-8 rounded-3xl transition-all duration-500 flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-brand/10 flex items-center justify-center text-brand shrink-0" style={{ boxShadow: "0 0 20px rgba(124,92,252,0.3)" }}>
                  <Robot size={24} weight="fill" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest text-brand mb-1">AIプロンプトラボ導入後</p>
                  <p className="text-2xl font-bold text-navydark">運用コスト: <span className="text-brand underline decoration-brand/30 underline-offset-4">30万/月</span></p>
                </div>
              </div>
            </div>

            {/* 採用ループ vs AI */}
            <div className="comparison-row flex flex-col md:flex-row w-full gap-4 relative group cursor-default reveal">
              <div className="comparison-left w-full md:w-1/2 glass-panel p-8 rounded-3xl transition-all duration-500 flex items-center gap-6" style={{ background: "rgba(255,255,255,0.3)" }}>
                <div className="w-14 h-14 rounded-full bg-black/5 flex items-center justify-center text-muted shrink-0">
                  <ArrowRight size={24} />
                </div>
                <p className="text-muted">終わらない<span className="font-bold">採用・退職のループ</span></p>
              </div>
              <div className="comparison-right w-full md:w-1/2 glass-panel p-8 rounded-3xl transition-all duration-500 flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-brand/10 flex items-center justify-center text-brand shrink-0">
                  <InfinityIcon size={24} weight="fill" />
                </div>
                <p className="text-xl font-bold text-navydark">知識を蓄積し続ける<span className="text-brand">辞めないAIエージェント</span></p>
              </div>
            </div>

            {/* 提案書作成速度 */}
            <div className="comparison-row flex flex-col md:flex-row w-full gap-4 relative group cursor-default reveal">
              <div className="comparison-left w-full md:w-1/2 glass-panel p-8 rounded-3xl transition-all duration-500 flex flex-col justify-center" style={{ background: "rgba(255,255,255,0.3)" }}>
                <div className="flex items-center gap-4 mb-4">
                  <FileText size={20} className="text-muted" />
                  <span className="text-muted font-medium">提案書・企画書の作成</span>
                </div>
                <div className="h-2 w-full bg-black/5 rounded-full overflow-hidden">
                  <div className="h-full bg-muted/40 w-full rounded-full" />
                </div>
                <div className="flex justify-between mt-2 text-xs text-muted/60">
                  <span>Day 1</span>
                  <span>Day 3 (完了)</span>
                </div>
              </div>
              <div className="comparison-right w-full md:w-1/2 glass-panel p-8 rounded-3xl transition-all duration-500 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <MagicWand size={20} weight="fill" className="text-brand" />
                  <span className="text-navydark font-bold">高精度なドラフト生成</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="font-[family-name:var(--font-outfit)] text-4xl font-black text-brand">3</div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold tracking-wide">分で完了</span>
                    <span className="text-xs text-muted">人間は「編集と思考」のみ</span>
                  </div>
                </div>
              </div>
            </div>

            {/* エラー検知 */}
            <div className="comparison-row flex flex-col md:flex-row w-full gap-4 relative group cursor-default reveal">
              <div className="comparison-left w-full md:w-1/2 glass-panel p-8 rounded-3xl transition-all duration-500 flex items-center gap-6" style={{ background: "rgba(255,255,255,0.3)" }}>
                <div className="w-14 h-14 rounded-full bg-black/5 flex items-center justify-center text-muted shrink-0">
                  <CalendarX size={24} />
                </div>
                <p className="text-muted">ミスが<span className="font-bold">翌日発覚・後手対応</span></p>
              </div>
              <div className="comparison-right w-full md:w-1/2 glass-panel p-8 rounded-3xl transition-all duration-500 flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-brand/10 flex items-center justify-center text-brand shrink-0">
                  <Target size={24} weight="fill" />
                </div>
                <p className="text-lg font-bold text-navydark">
                  <span className="text-brand border-b-2 border-brand/30">リアルタイム検知</span>と即時修正
                </p>
              </div>
            </div>

            {/* パラダイムシフト まとめ */}
            <div className="mt-4 glass-panel p-10 lg:p-14 rounded-[2rem] border border-white flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden relative reveal" style={{ background: "rgba(255,255,255,0.7)" }}>
              <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-brand/20 rounded-full blur-[80px] pointer-events-none" />
              <div className="w-full lg:w-5/12 relative z-10">
                <p className="text-sm font-bold text-brand tracking-widest mb-3">究極のROI</p>
                <h3 className="text-3xl font-bold text-navydark leading-tight mb-4">
                  事務作業に忙殺される日々から、
                  <br />
                  <span className="text-brand">経営・戦略</span>へ。
                </h3>
                <p className="text-muted">
                  AIがオペレーションを自律的に回すことで、人間のリソースは100%「非連続な成長を生み出すための思考」に投資できます。
                </p>
              </div>
              <div className="w-full lg:w-6/12 flex items-center gap-4 relative z-10">
                <div className="w-1/3 aspect-square rounded-2xl bg-white/40 border border-white/60 flex flex-col items-center justify-center p-4 grayscale opacity-60">
                  <Keyboard size={32} className="mb-2" />
                  <span className="text-xs font-bold text-center">バックオフィス<br />業務</span>
                </div>
                <div className="w-1/3 flex justify-center text-brand">
                  <ArrowFatLinesRight size={36} weight="fill" className="animate-pulse" />
                </div>
                <div className="w-1/3 aspect-square rounded-2xl bg-gradient-to-br from-brand to-brand-hover flex flex-col items-center justify-center p-4 text-white scale-110" style={{ boxShadow: "0 20px 40px rgba(124,92,252,0.3)" }}>
                  <Strategy size={36} weight="fill" className="mb-2" />
                  <span className="text-sm font-bold text-center leading-tight">経営<br />戦略</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3つの柱 */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MagicWand size={28} />,
                iconBg: "bg-brand/10 text-brand",
                num: "01",
                title: "Automate",
                sub: "完全自動化",
                desc: "LLMとRPAを組み合わせ、認知判断を伴う複雑なワークフローをend-to-endで自動化。人間が介在するプロセスを極限まで削ぎ落とします。",
                offset: "",
              },
              {
                icon: <RocketLaunch size={28} />,
                iconBg: "bg-blue-500/10 text-blue-600",
                num: "02",
                title: "Accelerate",
                sub: "非連続的な成長",
                desc: "24時間365日稼働するAIエージェントが、バックオフィスのボトルネックを解消。業務処理スピードが10倍以上になり、事業の成長を直接的に加速させます。",
                offset: "lg:-translate-y-8",
              },
              {
                icon: <Intersect size={28} />,
                iconBg: "bg-pink-500/10 text-pink-500",
                num: "03",
                title: "Align",
                sub: "組織の最適化",
                desc: "人員削減が目的ではありません。浮いたリソースを高付加価値なコア業務へ再配置する組織設計まで伴走します。",
                offset: "",
              },
            ].map((p) => (
              <div
                key={p.num}
                className={`glass-panel p-8 rounded-[2rem] reveal hover:-translate-y-2 transition-transform duration-500 ${p.offset}`}
              >
                <div className={`w-14 h-14 rounded-2xl ${p.iconBg} flex items-center justify-center mb-8`}>
                  {p.icon}
                </div>
                <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-bold mb-4">
                  {p.num}. {p.title}
                </h3>
                <h4 className="text-lg font-bold mb-3">{p.sub}</h4>
                <p className="text-navydark/70 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 業務時間削減セクション ========== */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[400px] rounded-full pointer-events-none" style={{ background: "var(--color-brand)", filter: "blur(160px)", opacity: 0.06 }} />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8">

            {/* 左パネル: ヒーローインパクト */}
            <div className="xl:col-span-5 glass-panel rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 flex flex-col justify-between min-h-[500px] lg:min-h-[600px] relative reveal">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-50 pointer-events-none rounded-2xl sm:rounded-[2.5rem]" />

              {/* ヘッダー */}
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand/20 bg-brand/5 backdrop-blur-md mb-6">
                  <Clock size={16} weight="fill" className="text-brand" />
                  <span className="font-[family-name:var(--font-outfit)] text-brand font-bold tracking-widest text-xs uppercase">Time Savings</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.2] tracking-tight text-navydark">
                  圧倒的な
                  <br />
                  <span className="text-brand">時間革命。</span>
                </h2>
                <p className="mt-5 text-muted font-medium text-sm sm:text-base leading-relaxed max-w-md">
                  AIプロンプトラボがもたらす、劇的な業務効率化。30名規模のチームにおける月間労働時間を大幅に短縮し、コア業務への集中を可能にします。
                </p>
              </div>

              {/* 大数字 + ゲージ */}
              <div className="mt-12 sm:mt-16 relative z-10">
                <div className="flex items-baseline gap-1 sm:gap-2 mb-8">
                  <span className="font-[family-name:var(--font-outfit)] text-7xl sm:text-8xl md:text-[8rem] leading-none font-black text-brand tracking-tighter">
                    85
                  </span>
                  <div className="flex flex-col">
                    <span className="font-[family-name:var(--font-outfit)] text-3xl sm:text-5xl font-bold text-brand leading-none">%</span>
                    <span className="text-lg sm:text-2xl font-bold text-navydark mt-1">削減</span>
                  </div>
                </div>

                {/* ゲージバー */}
                <div className="space-y-5">
                  <div className="flex items-end justify-between border-b border-brand/10 pb-3">
                    <div className="flex flex-col">
                      <span className="text-[10px] sm:text-xs font-bold tracking-wider text-muted/60 uppercase">Team Size</span>
                      <span className="font-medium text-navydark/60">30名体制</span>
                    </div>
                    <div className="flex flex-col text-right">
                      <span className="text-[10px] sm:text-xs font-bold tracking-wider text-muted/60 uppercase">Monthly Hours</span>
                      <span className="font-[family-name:var(--font-outfit)] font-bold text-navydark text-lg">業務時間推移</span>
                    </div>
                  </div>

                  <div className="relative w-full pt-4 pb-8">
                    <div className="flex justify-between text-xs sm:text-sm font-bold text-muted/60 mb-2">
                      <span>導入前</span>
                      <span className="font-[family-name:var(--font-outfit)]">4,800 h/月</span>
                    </div>
                    <div className="h-6 sm:h-8 w-full rounded-2xl bg-white border border-brand/10 shadow-inner relative overflow-hidden eliminated-pattern">
                      <div className="absolute top-0 left-0 h-full rounded-2xl bg-gradient-to-r from-brand to-brand-light" style={{ width: "15%", boxShadow: "0 0 20px rgba(124,92,252,0.4)" }}>
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
                      </div>
                    </div>
                    <div className="mt-2 text-brand font-bold text-xs sm:text-sm flex items-center gap-2">
                      <div className="w-0.5 h-3 bg-brand ml-4" />
                      導入後 <span className="font-[family-name:var(--font-outfit)] text-xl sm:text-2xl font-black">720 <span className="text-sm text-brand/80">h/月</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 右パネル: ブレイクダウンカード */}
            <div className="xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 content-start">
              {[
                { task: "データ入力・転記", before: "200h", after: "6h", reduction: "97", icon: <FileText size={20} /> },
                { task: "問い合わせ対応", before: "1,200h", after: "180h", reduction: "85", icon: <Users size={20} /> },
                { task: "レポート・資料作成", before: "800h", after: "48h", reduction: "94", icon: <MagicWand size={20} /> },
                { task: "請求書・経理処理", before: "150h", after: "3h", reduction: "98", icon: <Hourglass size={20} /> },
              ].map((item) => (
                <div key={item.task} className="glass-panel rounded-2xl sm:rounded-[2rem] p-6 lg:p-8 hover:-translate-y-2 transition-all duration-500 hover:shadow-xl group reveal">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <h3 className="font-bold text-navydark text-sm lg:text-base">{item.task}</h3>
                    </div>
                    <div className="font-[family-name:var(--font-outfit)] text-3xl lg:text-4xl font-black text-brand tracking-tighter">
                      {item.reduction}%
                      <span className="text-sm font-medium block text-right -mt-1">減</span>
                    </div>
                  </div>

                  <div className="space-y-3 mt-auto">
                    <div className="flex justify-between items-baseline">
                      <span className="font-[family-name:var(--font-outfit)] text-muted/60 font-medium text-sm">
                        <span className="text-[10px] uppercase block mb-[-2px]">導入前</span>
                        {item.before}
                      </span>
                      <ArrowRight size={14} className="text-brand/40" />
                      <span className="font-[family-name:var(--font-outfit)] text-brand font-bold text-xl text-right">
                        <span className="text-[10px] block text-right mb-[-2px]">導入後</span>
                        {item.after}
                      </span>
                    </div>
                    <div className="h-2 w-full bg-white rounded-full overflow-hidden eliminated-pattern border border-black/5 shadow-inner">
                      <div className="h-full bg-brand rounded-full" style={{ width: `${100 - parseInt(item.reduction)}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-sm text-muted mt-8 reveal">
            ※ 上記は30名体制の一般的な中小企業における導入効果の想定値です。実際の削減効果は業務内容により異なります。
          </p>
        </div>
      </section>

      {/* 事例 */}
      <section id="cases" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* ヘッダー */}
          <div className="text-center mb-16 sm:mb-20 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-white/80 backdrop-blur-md mb-6">
              <Sparkle size={14} weight="fill" className="text-brand" />
              <span className="font-[family-name:var(--font-outfit)] text-xs font-semibold tracking-[0.2em] text-navydark/60 uppercase">実績紹介</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight text-navydark mb-6">
              導入<span className="text-brand">事例</span>
            </h2>
            <p className="text-navydark/70 text-base sm:text-lg font-medium max-w-2xl mx-auto">
              AI実装がもたらす、圧倒的な成果。
              <br className="hidden md:block" />
              既存の限界を突破したクライアント様の事例をご紹介します。
            </p>
          </div>

          <div className="flex flex-col gap-12 md:gap-16">

            {/* ========== 事例01: FB5000 ========== */}
            <div className="glass-panel rounded-2xl sm:rounded-[2.5rem] p-5 sm:p-8 md:p-12 flex flex-col xl:flex-row gap-8 md:gap-12 reveal">
              {/* 左: コンテキスト */}
              <div className="w-full xl:w-2/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-[family-name:var(--font-outfit)] text-4xl font-light text-navydark/20">01</span>
                    <div className="h-px flex-1 bg-navydark/10" />
                  </div>
                  <div className="inline-block px-3 py-1 bg-navydark/5 border border-navydark/10 rounded-md text-xs font-bold text-navydark/70 tracking-wider mb-4">
                    META広告運用代行
                  </div>
                  <p className="text-sm text-navydark/50 font-medium mb-2">
                    株式会社バジェットアドテクノロジーズ / FB5000
                  </p>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug mb-4">
                    150社以上のFB運用を
                    <br />
                    AI全自動化で2名体制に
                  </h3>
                  <p className="text-navydark/60 text-sm leading-relaxed mb-6">
                    150社以上のクライアントを抱えるFB運用代行事業。運用ワーカー30名+ディレクター3名の体制が、全体管理者+ディレクターの2名に。FBアカウント運用、戦略立案、データ集計、リスト化、ターゲティングまでAIが全自動で実行。従来のシステム会社に依頼し6ヶ月間実装できなかったシステムを、依頼後わずか14日で運用開始。
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1.5 rounded-full bg-white/50 text-xs font-medium border border-white/80 text-navydark/70 flex items-center gap-1.5 backdrop-blur-md">
                    <Robot size={14} /> AI全自動運用
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-white/50 text-xs font-medium border border-white/80 text-navydark/70 flex items-center gap-1.5 backdrop-blur-md">
                    <Lightning size={14} weight="fill" /> 14日ローンチ
                  </span>
                </div>
              </div>

              {/* 右: データグリッド */}
              <div className="w-full xl:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 体制変化 - 大カード */}
                <div className="glass-panel rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between sm:col-span-2 hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-xs font-bold text-navydark/50 tracking-wider uppercase flex items-center gap-2">
                      <Users size={16} /> 運用体制
                    </h4>
                    <div className="px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-bold font-[family-name:var(--font-outfit)] tracking-wider">
                      94% 削減
                    </div>
                  </div>
                  <div className="flex items-end gap-6 sm:gap-12">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-navydark/40 font-semibold uppercase tracking-widest mb-1">導入前</span>
                      <span className="font-[family-name:var(--font-outfit)] text-2xl sm:text-3xl text-navydark/30 line-through font-light">33<span className="text-base ml-1">名</span></span>
                    </div>
                    <ArrowRight size={20} className="text-brand/40 mb-2" />
                    <div className="flex flex-col">
                      <span className="text-[10px] text-brand font-semibold uppercase tracking-widest mb-1">導入後</span>
                      <span className="font-[family-name:var(--font-outfit)] text-5xl sm:text-6xl md:text-7xl text-brand font-semibold tracking-tight">2<span className="text-2xl sm:text-3xl ml-1 font-bold">名</span></span>
                    </div>
                  </div>
                </div>

                {/* コスト */}
                <div className="glass-panel rounded-2xl sm:rounded-3xl p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="text-xs font-bold text-navydark/50 tracking-wider uppercase mb-6 flex items-center gap-2">
                    月間コスト
                  </h4>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-[family-name:var(--font-outfit)] text-xl text-navydark/30 line-through">400万円</span>
                      <ArrowRight size={14} className="text-navydark/20" />
                    </div>
                    <span className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl text-navydark font-semibold tracking-tight">50<span className="text-lg text-navydark/60 ml-1">万円</span></span>
                  </div>
                </div>

                {/* 開発期間 */}
                <div className="glass-panel rounded-2xl sm:rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="text-xs font-bold text-navydark/50 tracking-wider uppercase mb-6 flex items-center gap-2 relative z-10">
                    ローンチ期間
                  </h4>
                  <div className="relative z-10">
                    <div className="flex flex-col gap-1 mb-3">
                      <span className="text-[10px] text-red-900/40 font-bold bg-red-100/50 px-2 py-0.5 rounded w-max">他社ベンダー</span>
                      <span className="text-sm text-navydark/40 font-medium">6ヶ月間 実装できず</span>
                    </div>
                    <div className="h-px w-full bg-navydark/10 my-3" />
                    <div className="flex items-baseline gap-1">
                      <span className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl text-navydark font-semibold tracking-tight">14</span>
                      <span className="text-sm font-bold text-navydark/60">日でローンチ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ========== 事例02: PLEASURE ONE ========== */}
            <div className="glass-panel rounded-2xl sm:rounded-[2.5rem] p-5 sm:p-8 md:p-12 flex flex-col xl:flex-row-reverse gap-8 md:gap-12 reveal">
              {/* 右: コンテキスト */}
              <div className="w-full xl:w-2/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-px flex-1 bg-navydark/10" />
                    <span className="font-[family-name:var(--font-outfit)] text-4xl font-light text-navydark/20">02</span>
                  </div>
                  <div className="inline-block px-3 py-1 bg-navydark/5 border border-navydark/10 rounded-md text-xs font-bold text-navydark/70 tracking-wider mb-4 xl:float-right">
                    会員制SaaS
                  </div>
                  <div className="clear-both" />
                  <p className="text-sm text-navydark/50 font-medium mb-2 xl:text-right">
                    株式会社DoOver / PLEASURE ONE
                  </p>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug mb-4 xl:text-right">
                    ホスピタリティ向け
                    <br />
                    会員制SaaSを5日で構築
                  </h3>
                  <p className="text-navydark/60 text-sm leading-relaxed mb-6 xl:text-right">
                    シーシャ・サウナ店舗を展開するクライアント。会員管理システム、ユーザー向けLINE連携、Stripe定額決済、管理画面の設計・開発を一気通貫で実施。外部見積もり400万円・3ヶ月の案件を、月額20万円・わずか5日で運用開始まで完了。
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap xl:justify-end">
                  <span className="px-3 py-1.5 rounded-full bg-white/50 text-xs font-medium border border-white/80 text-navydark/70 flex items-center gap-1.5 backdrop-blur-md">
                    <RocketLaunch size={14} /> 超高速構築
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-white/50 text-xs font-medium border border-white/80 text-navydark/70 flex items-center gap-1.5 backdrop-blur-md">
                    <Lightning size={14} weight="fill" /> 5日ローンチ
                  </span>
                </div>
              </div>

              {/* 左: データグリッド */}
              <div className="w-full xl:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 開発アプローチ比較 - 大カード */}
                <div className="glass-panel rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-center sm:col-span-2 hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="text-xs font-bold text-navydark/50 tracking-wider uppercase mb-6 flex items-center gap-2">
                    開発アプローチの違い
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-4 sm:gap-6 items-center">
                    {/* 従来 */}
                    <div className="bg-navydark/[0.02] border border-navydark/5 rounded-2xl p-5 flex flex-col gap-2">
                      <span className="text-[10px] font-bold text-navydark/40 tracking-wider">外部見積もり</span>
                      <div className="font-[family-name:var(--font-outfit)] text-xl text-navydark/40 font-light">初期 400万円</div>
                      <div className="text-sm text-navydark/40 flex items-center gap-1">
                        <Clock size={14} /> 開発期間 3ヶ月
                      </div>
                    </div>
                    {/* 矢印 */}
                    <div className="hidden sm:flex flex-col items-center justify-center text-brand/40">
                      <ArrowRight size={24} weight="bold" />
                    </div>
                    <div className="flex sm:hidden justify-center text-brand/40 py-1">
                      <ArrowRight size={20} weight="bold" className="rotate-90" />
                    </div>
                    {/* AI */}
                    <div className="bg-white/80 border border-brand/20 rounded-2xl p-5 flex flex-col gap-2" style={{ boxShadow: "0 8px 16px -6px rgba(124,92,252,0.15)" }}>
                      <span className="text-[10px] font-bold text-brand tracking-wider">AIプロンプトラボ</span>
                      <div className="font-[family-name:var(--font-outfit)] text-2xl sm:text-3xl text-brand font-semibold tracking-tight">
                        月額 20<span className="text-base text-brand/70 ml-1">万円</span>
                      </div>
                      <div className="text-sm font-bold text-navydark flex items-center gap-1.5">
                        <RocketLaunch size={14} weight="fill" className="text-brand" /> 5日間でローンチ
                      </div>
                    </div>
                  </div>
                </div>

                {/* 実装機能 */}
                <div className="glass-panel rounded-2xl sm:rounded-3xl p-6 flex flex-col justify-between sm:col-span-2 hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="text-xs font-bold text-navydark/50 tracking-wider uppercase mb-4 flex items-center gap-2">
                    実装機能
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl border border-navydark/5 shadow-sm">
                      <div className="w-6 h-6 rounded bg-[#00B900] flex items-center justify-center text-white text-[10px] font-bold">LINE</div>
                      <span className="text-xs font-bold text-navydark/80">LINEログイン/連携</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl border border-navydark/5 shadow-sm">
                      <div className="w-6 h-6 rounded bg-[#635BFF] flex items-center justify-center text-white text-[10px] font-bold">S</div>
                      <span className="text-xs font-bold text-navydark/80">Stripe定額決済</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl border border-navydark/5 shadow-sm">
                      <div className="w-6 h-6 rounded bg-navydark flex items-center justify-center text-white text-[10px] font-bold">DB</div>
                      <span className="text-xs font-bold text-navydark/80">専用管理画面</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========== セクション3: The AI Revolution is Now ========== */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          {/* 統計カード */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {/* 生産性 */}
            <div className="glass-panel p-6 sm:p-10 rounded-2xl sm:rounded-[2rem] flex flex-col justify-between relative overflow-hidden group reveal">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand/10 rounded-bl-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <TrendUp size={28} weight="fill" className="text-brand absolute top-6 right-6" />
              </div>
              <p className="text-sm font-bold text-muted tracking-wider mb-8">生産性向上</p>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="font-[family-name:var(--font-outfit)] font-black text-5xl md:text-7xl text-navydark tracking-tighter">40</span>
                  <span className="font-[family-name:var(--font-outfit)] text-3xl md:text-4xl text-brand font-bold">%</span>
                </div>
                <p className="text-sm text-navydark font-medium mt-4 pt-4 border-t border-navydark/10">
                  AI導入企業の平均生産性向上率（McKinsey 2025年調査）
                </p>
              </div>
            </div>

            {/* 日本の導入率 */}
            <div className="glass-panel p-6 sm:p-10 rounded-2xl sm:rounded-[2rem] flex flex-col justify-between relative overflow-hidden group reveal">
              <p className="text-sm font-bold text-muted tracking-wider mb-8">国内AI導入率</p>
              <div className="space-y-2">
                <p className="text-xs text-muted mb-[-10px] ml-1">国内企業の本格導入率はわずか</p>
                <div className="flex items-baseline gap-1">
                  <span className="font-[family-name:var(--font-outfit)] font-black text-6xl md:text-8xl text-brand tracking-tighter">20</span>
                  <span className="font-[family-name:var(--font-outfit)] text-3xl md:text-4xl text-brand font-bold">%</span>
                </div>
                <p className="text-sm text-navydark font-bold mt-4 bg-brand/10 text-brand inline-block px-3 py-1 rounded-full">
                  今動けば、圧倒的な先行者利益
                </p>
              </div>
            </div>

            {/* ROI達成速度 */}
            <div className="glass-panel p-6 sm:p-10 rounded-2xl sm:rounded-[2rem] flex flex-col justify-between relative overflow-hidden group reveal">
              <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-brand to-transparent opacity-50" />
              <p className="text-sm font-bold text-muted tracking-wider mb-8">平均投資回収期間</p>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-[family-name:var(--font-outfit)] font-black text-5xl md:text-7xl text-navydark tracking-tighter">3</span>
                  <span className="font-[family-name:var(--font-outfit)] text-xl md:text-2xl text-muted font-medium tracking-wider">ヶ月</span>
                </div>
                <p className="text-sm text-navydark font-medium mt-4 pt-4 border-t border-navydark/10">
                  AIプロンプトラボ導入後、投資回収（損益分岐点）に達するまでの平均期間
                </p>
              </div>
            </div>
          </div>

          {/* 問いかけ CTA */}
          <div className="glass-panel rounded-2xl sm:rounded-[3rem] p-6 sm:p-12 lg:p-24 text-center relative overflow-hidden reveal" style={{ background: "rgba(255,255,255,0.6)", boxShadow: "0 24px 80px rgba(26,26,46,0.08)" }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand/20 blur-[60px] pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 text-brand/5 pointer-events-none">
              <Brain size={300} weight="fill" />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <p className="font-[family-name:var(--font-outfit)] font-bold tracking-[0.2em] text-brand text-sm mb-6">THE REVOLUTION IS NOW</p>
              <h2 className="text-2xl sm:text-4xl lg:text-6xl font-black text-navydark leading-tight mb-8 sm:mb-12 tracking-tight py-2">
                あなたの会社は、
                <br />
                <span className="relative inline-block mt-4">
                  どちら側ですか？
                  <div className="absolute bottom-1 left-0 w-full h-3 bg-brand/20 -z-10 rounded-sm" />
                </span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                <a
                  href="#contact"
                  className="bg-navydark text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-black transition-all hover:-translate-y-1 flex items-center justify-center gap-3"
                  style={{ boxShadow: "0 8px 30px rgba(26,26,46,0.2)" }}
                >
                  無料AI診断を申し込む
                  <ArrowRight size={20} weight="bold" />
                </a>
                <a href="#cases" className="glass-panel px-10 py-5 rounded-full font-bold text-navydark hover:bg-white transition-all flex items-center justify-center gap-3">
                  導入事例を見る
                </a>
              </div>
              <p className="text-xs text-muted mt-8 font-medium flex items-center gap-1">
                <LockKey size={14} /> 無理な営業は一切行いません。まずは現状の課題をお聞かせください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 料金モデル */}
      <section id="pricing" className="py-24 relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[300px] rounded-full pointer-events-none"
          style={{ background: "var(--color-brand)", filter: "blur(120px)", opacity: 0.1 }}
        />
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="font-[family-name:var(--font-outfit)] uppercase tracking-widest text-brand text-sm font-semibold mb-4 block">
              Pricing
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6">
              シンプルな月額プラン。
            </h2>
            <p className="text-lg text-navydark/70 max-w-2xl mx-auto">
              規模や業務範囲に合わせて3つのプランをご用意。
              <br />
              初期費用は一切かかりません。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 reveal">
            {[
              {
                name: "Starter",
                price: "10",
                desc: "小規模チームの業務自動化に最適",
                features: [
                  "AIエージェント 1体構築",
                  "対象業務 1フロー",
                  "月次レポート",
                  "メールサポート",
                ],
                popular: false,
              },
              {
                name: "Growth",
                price: "20",
                desc: "複数業務の横断的な自動化に",
                features: [
                  "AIエージェント 3体構築",
                  "対象業務 3フローまで",
                  "週次レポート & 改善提案",
                  "Slack / チャットサポート",
                  "優先対応",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "30",
                desc: "組織全体のオペレーション変革",
                features: [
                  "AIエージェント 無制限",
                  "対象業務 制限なし",
                  "専任担当者アサイン",
                  "組織設計コンサルティング",
                  "カスタムインテグレーション",
                  "SLA保証",
                ],
                popular: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`glass-panel rounded-[2rem] p-8 flex flex-col relative ${
                  plan.popular ? "ring-2 ring-brand scale-[1.02]" : ""
                }`}
                style={{ boxShadow: plan.popular ? "0 20px 50px rgba(124,92,252,0.12)" : "0 20px 50px rgba(26,26,46,0.05)" }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-xs font-semibold px-4 py-1 rounded-full">
                    一番人気
                  </div>
                )}
                <h3 className="font-[family-name:var(--font-outfit)] text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-navydark/60 mb-6">{plan.desc}</p>
                <div className="mb-6">
                  <span className="font-[family-name:var(--font-outfit)] text-5xl font-bold">{plan.price}</span>
                  <span className="text-navydark/60 text-sm ml-1">万円 / 月</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={18} weight="fill" className="text-brand shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center py-3.5 min-h-[44px] flex items-center justify-center rounded-full font-medium transition-all duration-300 ${
                    plan.popular
                      ? "bg-brand text-white hover:bg-navydark shadow-[0_8px_20px_-4px_rgba(124,92,252,0.5)]"
                      : "glass-button"
                  }`}
                >
                  まずは相談する
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-navydark/50 mt-8">
            ※初期費用0円。全プラン14日間の無料トライアル付き。
          </p>
        </div>
      </section>

      {/* プロセス */}
      <section className="py-24 lg:py-32 border-t border-navydark/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl font-bold">導入プロセス</h2>
            <p className="text-navydark/60 mt-4">最短1ヶ月でPoC（概念実証）を完了し、効果を判定します。</p>
          </div>

          <div className="relative">
            <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand/50 via-brand/20 to-transparent md:-translate-x-1/2" />

            {[
              { num: "01", title: "Audit", sub: "業務アセスメント & AI要件定義", desc: "現場へのヒアリングを通じ、AI化のROIが最も高い業務フローを特定。期待効果を数値化します。", active: true },
              { num: "02", title: "Build & PoC", sub: "プロトタイプ開発と検証", desc: "特定業務に対するAIエージェントを構築し、小規模テストを実施。精度と実用性を確認します。", active: false },
              { num: "03", title: "Integration", sub: "本番環境への実装", desc: "既存システムと安全に接続。セキュリティ要件を満たした形でオペレーションに組み込みます。", active: false },
            ].map((step, i) => (
              <div key={step.num} className={`relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 reveal ${i > 0 ? "mt-12" : ""}`}>
                {i % 2 === 0 ? (
                  <>
                    <div className="hidden md:block w-5/12 text-right">
                      <h3 className="font-[family-name:var(--font-outfit)] text-xl font-bold">{step.num}. {step.title}</h3>
                      <p className="text-sm font-semibold mt-1">{step.sub}</p>
                    </div>
                    <div className="absolute left-0 md:relative md:left-auto w-14 h-14 rounded-full glass-panel flex items-center justify-center z-10">
                      <div className={`w-3 h-3 rounded-full ${step.active ? "bg-brand" : "bg-navydark/20"}`} />
                    </div>
                    <div className="w-full md:w-5/12 pl-16 md:pl-0">
                      <div className="md:hidden mb-2">
                        <h3 className="font-[family-name:var(--font-outfit)] text-xl font-bold">{step.num}. {step.title}</h3>
                        <p className="text-sm font-semibold">{step.sub}</p>
                      </div>
                      <p className="text-sm text-navydark/70 glass-panel p-4 rounded-xl">{step.desc}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-full md:w-5/12 pl-16 md:pl-0 md:text-right order-2 md:order-1">
                      <div className="md:hidden mb-2">
                        <h3 className="font-[family-name:var(--font-outfit)] text-xl font-bold">{step.num}. {step.title}</h3>
                        <p className="text-sm font-semibold">{step.sub}</p>
                      </div>
                      <p className="text-sm text-navydark/70 glass-panel p-4 rounded-xl">{step.desc}</p>
                    </div>
                    <div className="absolute left-0 md:relative md:left-auto w-14 h-14 rounded-full glass-panel flex items-center justify-center order-1 md:order-2 z-10">
                      <div className="w-3 h-3 bg-navydark/20 rounded-full" />
                    </div>
                    <div className="hidden md:block w-5/12 order-3">
                      <h3 className="font-[family-name:var(--font-outfit)] text-xl font-bold">{step.num}. {step.title}</h3>
                      <p className="text-sm font-semibold mt-1">{step.sub}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 max-w-3xl mx-auto px-6 reveal">
        <h2 className="text-3xl font-bold text-center mb-12">よくあるご質問</h2>
        <div className="space-y-4">
          {[
            {
              q: "機密データのセキュリティはどうなっていますか？",
              a: "エンタープライズ向けのセキュアな環境にて構築し、学習データとしてモデルに利用されない設定を徹底します。自社専用のプライベート環境での構築も可能です。",
            },
            {
              q: "社内システムが古く、APIがありません。対応可能ですか？",
              a: "はい、可能です。APIがないレガシーシステムに対しては、RPAとAIを組み合わせることで、情報抽出と入力をシームレスに連携させるアプローチをとります。",
            },
            {
              q: "月額プランの途中解約は可能ですか？",
              a: "はい、可能です。最低契約期間は3ヶ月となりますが、それ以降はいつでも解約いただけます。構築したAIエージェントの引き継ぎも対応いたします。",
            },
          ].map((faq, i) => (
            <details key={i} className="glass-panel rounded-2xl group cursor-pointer">
              <summary className="flex items-center justify-between p-6 font-semibold">
                {faq.q}
                <CaretDown size={18} className="shrink-0 ml-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-sm text-navydark/70 border-t border-white/20 pt-4">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand/10 pointer-events-none" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full z-[-1]"
          style={{ background: "rgba(124,92,252,0.2)", filter: "blur(150px)" }}
        />
        <div className="max-w-4xl mx-auto px-6 text-center reveal relative z-10">
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
            AIと働く、新しい組織図を描こう。
          </h2>
          <p className="text-lg text-navydark/70 mb-10 max-w-xl mx-auto">
            まずは30分の無料ディスカッションから。
            <br />
            貴社のどの業務がAI化可能か、ざっくばらんにお話ししましょう。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              className="bg-navydark text-white px-8 py-4 rounded-full font-medium hover:bg-brand transition-all duration-300"
              style={{ boxShadow: "0 8px 30px rgba(26,26,46,0.2)" }}
            >
              無料オンライン相談を予約する
            </button>
            <button className="glass-button px-8 py-4 rounded-full font-medium">
              資料をダウンロード
            </button>
          </div>
          <p className="mt-8 text-xs text-navydark/50">※無理な営業行為は一切行いません。</p>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t border-navydark/5 bg-white/30 backdrop-blur-md pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Sparkle size={24} weight="fill" className="text-brand" />
              <span className="font-[family-name:var(--font-outfit)] font-semibold text-xl tracking-tight">
                AI Prompt LAB
              </span>
            </div>
            <p className="text-sm text-navydark/60 max-w-sm">
              AIプロンプトラボは、AIエージェントによる業務変革で企業の非連続な成長を支援します。月額制で導入リスクを最小限に。
            </p>
          </div>
          <div>
            <h4 className="font-[family-name:var(--font-outfit)] font-semibold mb-4">サービス</h4>
            <ul className="space-y-2 text-sm text-navydark/60">
              <li><a href="#" className="hover:text-brand transition-colors">業務プロセスマイニング</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">AIエージェント開発</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">LLM/RPAインテグレーション</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">組織再構築コンサルティング</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-[family-name:var(--font-outfit)] font-semibold mb-4">運営会社</h4>
            <ul className="space-y-2 text-sm text-navydark/60">
              <li className="font-medium text-navydark/80">株式会社COMON CENTER</li>
              <li>代表取締役 桑原竣亮</li>
              <li>〒102-0074<br />東京都千代田区九段南1-5-6<br />りそな九段ビル 5F</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center text-xs text-navydark/40 border-t border-navydark/5 pt-8">
          &copy; 2026 株式会社COMON CENTER All rights reserved.
        </div>
      </footer>
    </div>
  );
}
