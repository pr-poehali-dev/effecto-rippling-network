import { useState } from "react";
import {
  Users,
  Zap,
  Eye,
  Globe,
  ArrowRight,
  Hash,
  Mic,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  BarChart2,
  FileText,
  ImageIcon,
  MessageSquare,
  BookOpen,
  Shield,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", profession: "", group: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#36393f] text-white overflow-x-hidden">

      {/* Модальное окно регистрации */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="bg-[#36393f] rounded-xl w-full max-w-md shadow-2xl border border-[#202225]">
            <div className="p-6">
              {submitted ? (
                <div className="text-center py-6">
                  <CheckCircle className="w-16 h-16 text-[#3ba55c] mx-auto mb-4" />
                  <h2 className="text-white text-xl font-bold mb-2">Заявка принята!</h2>
                  <p className="text-[#b9bbbe] text-sm mb-6">Мы свяжемся с вами в ближайшее время и откроем доступ к сообществу.</p>
                  <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white w-full" onClick={() => { setShowModal(false); setSubmitted(false); setForm({ name: "", email: "", profession: "", group: "" }); }}>
                    Закрыть
                  </Button>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h2 className="text-white text-xl font-bold">Присоединиться</h2>
                      <p className="text-[#b9bbbe] text-sm mt-1">Заполните форму — мы откроем доступ</p>
                    </div>
                    <button onClick={() => setShowModal(false)} className="text-[#72767d] hover:text-white transition-colors">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-[#b9bbbe] text-xs font-semibold uppercase tracking-wide block mb-1.5">Ваше имя</label>
                      <Input
                        required
                        placeholder="Иван Петров"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="bg-[#202225] border-[#202225] text-white placeholder:text-[#72767d] focus:border-[#5865f2] focus:ring-[#5865f2]"
                      />
                    </div>
                    <div>
                      <label className="text-[#b9bbbe] text-xs font-semibold uppercase tracking-wide block mb-1.5">Email</label>
                      <Input
                        required
                        type="email"
                        placeholder="ivan@company.ru"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="bg-[#202225] border-[#202225] text-white placeholder:text-[#72767d] focus:border-[#5865f2] focus:ring-[#5865f2]"
                      />
                    </div>
                    <div>
                      <label className="text-[#b9bbbe] text-xs font-semibold uppercase tracking-wide block mb-1.5">Профессия</label>
                      <Input
                        required
                        placeholder="Менеджер проектов, дизайнер..."
                        value={form.profession}
                        onChange={e => setForm({ ...form, profession: e.target.value })}
                        className="bg-[#202225] border-[#202225] text-white placeholder:text-[#72767d] focus:border-[#5865f2] focus:ring-[#5865f2]"
                      />
                    </div>
                    <div>
                      <label className="text-[#b9bbbe] text-xs font-semibold uppercase tracking-wide block mb-1.5">Интересующая группа</label>
                      <Select onValueChange={val => setForm({ ...form, group: val })}>
                        <SelectTrigger className="bg-[#202225] border-[#202225] text-white focus:ring-[#5865f2]">
                          <SelectValue placeholder="Выберите сообщество" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#2f3136] border-[#202225] text-white">
                          <SelectItem value="business">💼 Бизнес</SelectItem>
                          <SelectItem value="engineers">⚙️ Инженеры</SelectItem>
                          <SelectItem value="designers">🎨 Дизайнеры</SelectItem>
                          <SelectItem value="marketing">📊 Маркетинг</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button type="submit" className="bg-[#5865f2] hover:bg-[#4752c4] text-white w-full mt-2 py-3 font-medium">
                      <Users className="w-4 h-4 mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      {/* Навигация */}
      <nav className="bg-[#2f3136] border-b border-[#202225] px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#5865f2] rounded-full flex items-center justify-center">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-white">ПроСообщества</h1>
              <p className="text-xs text-[#b9bbbe] hidden sm:block">Платформа профессиональных сообществ</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <Button variant="ghost" className="text-[#b9bbbe] hover:text-white hover:bg-[#40444b]">
              О платформе
            </Button>
            <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 py-2 rounded text-sm font-medium" onClick={() => setShowModal(true)}>
              Присоединиться
            </Button>
          </div>
          <Button
            variant="ghost"
            className="sm:hidden text-[#b9bbbe] hover:text-white hover:bg-[#40444b] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="sm:hidden mt-4 pt-4 border-t border-[#202225]">
            <div className="flex flex-col gap-3">
              <Button variant="ghost" className="text-[#b9bbbe] hover:text-white hover:bg-[#40444b] justify-start">
                О платформе
              </Button>
              <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 py-2 rounded text-sm font-medium" onClick={() => setShowModal(true)}>
                Присоединиться
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Макет в стиле Discord */}
      <div className="flex min-h-screen">
        {/* Боковая панель серверов */}
        <div className="hidden lg:flex w-[72px] bg-[#202225] flex-col items-center py-3 gap-2">
          <div className="w-12 h-12 bg-[#5865f2] rounded-2xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer" title="ПроСообщества">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div className="w-8 h-[2px] bg-[#36393f] rounded-full"></div>
          {[
            { icon: "💼", label: "Бизнес" },
            { icon: "⚙️", label: "Инженеры" },
            { icon: "🎨", label: "Дизайнеры" },
            { icon: "📊", label: "Маркетинг" },
          ].map((item, i) => (
            <div
              key={i}
              className="w-12 h-12 bg-[#36393f] rounded-3xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer hover:bg-[#5865f2]"
              title={item.label}
            >
              <span className="text-lg">{item.icon}</span>
            </div>
          ))}
        </div>

        {/* Основной контент */}
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Боковая панель каналов */}
          <div
            className={`${mobileSidebarOpen ? "block" : "hidden"} lg:block w-full lg:w-60 bg-[#2f3136] flex flex-col`}
          >
            <div className="p-4 border-b border-[#202225] flex items-center justify-between">
              <h2 className="text-white font-semibold text-base">💼 Бизнес-сообщество</h2>
              <Button
                variant="ghost"
                className="lg:hidden text-[#b9bbbe] hover:text-white hover:bg-[#40444b] p-1"
                onClick={() => setMobileSidebarOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex-1 p-2">
              <div className="mb-4">
                <div className="flex items-center gap-1 px-2 py-1 text-[#8e9297] text-xs font-semibold uppercase tracking-wide">
                  <ArrowRight className="w-3 h-3" />
                  <span>Каналы сообщества</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {["новости", "опросы", "контент", "вакансии"].map((channel) => (
                    <div
                      key={channel}
                      className="flex items-center gap-1.5 px-2 py-1 rounded text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43] cursor-pointer"
                    >
                      <Hash className="w-4 h-4" />
                      <span className="text-sm">{channel}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 px-2 py-1 text-[#8e9297] text-xs font-semibold uppercase tracking-wide">
                  <ArrowRight className="w-3 h-3" />
                  <span>Другие группы</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {["⚙️ Инженеры", "🎨 Дизайнеры"].map((channel) => (
                    <div
                      key={channel}
                      className="flex items-center gap-1.5 px-2 py-1 rounded text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43] cursor-pointer"
                    >
                      <Mic className="w-4 h-4" />
                      <span className="text-sm">{channel}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Пользователь */}
            <div className="p-2 bg-[#292b2f] flex items-center gap-2">
              <div className="w-8 h-8 bg-[#5865f2] rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">А</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm font-medium truncate">Алексей К.</div>
                <div className="text-[#b9bbbe] text-xs truncate">Эксперт сообщества</div>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-[#40444b]">
                  <Settings className="w-4 h-4 text-[#b9bbbe]" />
                </Button>
              </div>
            </div>
          </div>

          {/* Область чата */}
          <div className="flex-1 flex flex-col">
            {/* Заголовок чата */}
            <div className="h-12 bg-[#36393f] border-b border-[#202225] flex items-center px-4 gap-2">
              <Button
                variant="ghost"
                className="lg:hidden text-[#8e9297] hover:text-[#dcddde] hover:bg-[#40444b] p-1 mr-2"
                onClick={() => setMobileSidebarOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              <Hash className="w-5 h-5 text-[#8e9297]" />
              <span className="text-white font-semibold">новости</span>
              <div className="w-px h-6 bg-[#40444b] mx-2 hidden sm:block"></div>
              <span className="text-[#8e9297] text-sm hidden sm:block">Актуальные новости вашего сообщества</span>
              <div className="ml-auto flex items-center gap-2 sm:gap-4">
                <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
              </div>
            </div>

            {/* Сообщения */}
            <div className="flex-1 p-2 sm:p-4 space-y-4 sm:space-y-6 overflow-y-auto">

              {/* Приветственное сообщение от платформы */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#5865f2] rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">ПроСообщества</span>
                    <span className="bg-[#5865f2] text-white text-xs px-1 rounded">ПЛАТФОРМА</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 09:00</span>
                  </div>
                  <div className="text-[#dcddde] text-sm sm:text-base">
                    <p className="mb-3 sm:mb-4">
                      <strong>Добро пожаловать в ПроСообщества!</strong> Платформа, где профессионалы объединяются, делятся опытом и развиваются вместе.
                    </p>
                    <div className="bg-[#2f3136] border-l-4 border-[#5865f2] p-3 sm:p-4 rounded">
                      <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Что вы можете делать в сообществе:</h3>
                      <ul className="space-y-1 text-xs sm:text-sm text-[#b9bbbe]">
                        <li>📰 Публиковать новости и анонсы в своей профгруппе</li>
                        <li>📊 Создавать опросы и голосования среди коллег</li>
                        <li>🖼️ Делиться полезным контентом: статьями, кейсами, материалами</li>
                        <li>💬 Обсуждать профессиональные темы в тематических каналах</li>
                        <li>🌐 Находить экспертов и строить деловые связи</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Пример поста с новостью */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm font-medium">М</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">Марина Иванова</span>
                    <span className="bg-[#faa61a] text-white text-xs px-1 rounded">ЭКСПЕРТ</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 10:15</span>
                  </div>
                  <div className="text-[#dcddde] mb-3 text-sm sm:text-base">
                    Коллеги, публикую результаты нашего исследования рынка за Q1 2025. Обязательно ознакомьтесь!
                  </div>

                  {/* Демо карточки контента */}
                  <div className="bg-[#2f3136] border border-[#202225] rounded-lg overflow-hidden w-full max-w-sm">
                    <div className="h-16 sm:h-20 bg-gradient-to-r from-[#5865f2] to-[#7c3aed] flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 text-white opacity-80" />
                    </div>
                    <div className="p-3 sm:p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="w-4 h-4 text-[#5865f2]" />
                        <span className="text-[#b9bbbe] text-xs uppercase font-semibold tracking-wide">Исследование</span>
                      </div>
                      <h3 className="text-white font-semibold text-sm mb-1">Рынок труда Q1 2025: ключевые тренды</h3>
                      <p className="text-[#b9bbbe] text-xs mb-3">Аналитика по 12 отраслям, опрос 3000+ специалистов...</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-[#72767d] text-xs">
                          <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" /> 24</span>
                          <span className="flex items-center gap-1">❤️ 87</span>
                        </div>
                        <Button size="sm" className="bg-[#5865f2] hover:bg-[#4752c4] text-white text-xs px-3 py-1 h-auto rounded">
                          Читать
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Опрос */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm font-medium">Д</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">Дмитрий Орлов</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 11:40</span>
                  </div>
                  <div className="text-[#dcddde] mb-3 text-sm sm:text-base">
                    Запускаю опрос для нашей группы — давайте определим тему следующего вебинара!
                  </div>
                  {/* Карточка опроса */}
                  <div className="bg-[#2f3136] border border-[#202225] rounded-lg p-3 sm:p-4 w-full max-w-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <BarChart2 className="w-4 h-4 text-[#5865f2]" />
                      <span className="text-white font-semibold text-sm">📊 Опрос сообщества</span>
                    </div>
                    <p className="text-[#dcddde] text-sm mb-3">Какая тема вебинара вам наиболее интересна?</p>
                    <div className="space-y-2">
                      {[
                        { label: "Управление командами", pct: 42 },
                        { label: "Выход на новые рынки", pct: 31 },
                        { label: "Автоматизация процессов", pct: 27 },
                      ].map((opt) => (
                        <div key={opt.label}>
                          <div className="flex justify-between text-xs text-[#b9bbbe] mb-1">
                            <span>{opt.label}</span>
                            <span>{opt.pct}%</span>
                          </div>
                          <div className="h-2 bg-[#40444b] rounded-full">
                            <div
                              className="h-2 bg-[#5865f2] rounded-full"
                              style={{ width: `${opt.pct}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-[#72767d] text-xs mt-3">156 голосов · Осталось 2 дня</p>
                  </div>
                </div>
              </div>

              {/* Секция "Как начать" */}
              <div className="bg-[#2f3136] border border-[#202225] rounded-lg p-4 sm:p-6 mt-6 sm:mt-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-[#5865f2]" />
                  Вступите в профессиональное сообщество
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5865f2] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-sm sm:text-base">1</span>
                    </div>
                    <h3 className="text-white font-medium mb-2 text-sm sm:text-base">Зарегистрируйтесь</h3>
                    <p className="text-[#b9bbbe] text-xs sm:text-sm">Создайте профиль специалиста за 1 минуту</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5865f2] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-sm sm:text-base">2</span>
                    </div>
                    <h3 className="text-white font-medium mb-2 text-sm sm:text-base">Выберите группы</h3>
                    <p className="text-[#b9bbbe] text-xs sm:text-sm">Вступайте в профессиональные сообщества по интересам</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5865f2] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-sm sm:text-base">3</span>
                    </div>
                    <h3 className="text-white font-medium mb-2 text-sm sm:text-base">Публикуйте и общайтесь</h3>
                    <p className="text-[#b9bbbe] text-xs sm:text-sm">Делитесь новостями, проводите опросы, развивайте сеть</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 sm:px-8 py-2 sm:py-3 rounded text-sm font-medium" onClick={() => setShowModal(true)}>
                    <Users className="w-4 h-4 mr-2" />
                    Присоединиться бесплатно
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#4f545c] text-[#b9bbbe] hover:bg-[#40444b] hover:border-[#6d6f78] px-6 sm:px-8 py-2 sm:py-3 rounded text-sm font-medium bg-transparent"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Узнать больше
                  </Button>
                </div>
              </div>

              {/* Преимущества */}
              <div className="bg-[#2f3136] border border-[#202225] rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Почему ПроСообщества?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    {
                      icon: <Hash className="w-4 h-4 sm:w-5 sm:h-5" />,
                      title: "Тематические группы",
                      desc: "Сообщества по профессиям, отраслям и интересам",
                    },
                    {
                      icon: <BarChart2 className="w-4 h-4 sm:w-5 sm:h-5" />,
                      title: "Опросы и голосования",
                      desc: "Узнайте мнение коллег и принимайте решения вместе",
                    },
                    {
                      icon: <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5" />,
                      title: "Публикации контента",
                      desc: "Статьи, кейсы, презентации и медиа в одном месте",
                    },
                    {
                      icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />,
                      title: "Проверенные эксперты",
                      desc: "Верифицированные специалисты и надёжное окружение",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded hover:bg-[#36393f] transition-colors"
                    >
                      <div className="text-[#5865f2] mt-0.5">{feature.icon}</div>
                      <div>
                        <div className="text-white font-medium text-xs sm:text-sm">{feature.title}</div>
                        <div className="text-[#b9bbbe] text-xs sm:text-sm">{feature.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Поле ввода */}
            <div className="p-2 sm:p-4">
              <div className="bg-[#40444b] rounded-lg px-3 sm:px-4 py-2 sm:py-3">
                <div className="text-[#72767d] text-xs sm:text-sm">Написать в #новости...</div>
              </div>
            </div>
          </div>

          {/* Боковая панель участников */}
          <div className="hidden xl:block w-60 bg-[#2f3136] p-4">
            <div className="mb-4">
              <h3 className="text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-2">В сети — 4</h3>
              <div className="space-y-2">
                {[
                  {
                    name: "Марина Иванова",
                    status: "Публикует исследование",
                    avatar: "М",
                    color: "from-purple-500 to-pink-500",
                  },
                  { name: "Дмитрий Орлов", status: "Создал опрос", avatar: "Д", color: "from-green-500 to-teal-500" },
                  { name: "Алексей К.", status: "Эксперт сообщества", avatar: "А", color: "from-blue-500 to-purple-500" },
                  { name: "Светлана Р.", status: "Делится контентом", avatar: "С", color: "from-orange-500 to-red-500" },
                ].map((user, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded hover:bg-[#36393f] cursor-pointer">
                    <div
                      className={`w-8 h-8 bg-gradient-to-r ${user.color} rounded-full flex items-center justify-center relative`}
                    >
                      <span className="text-white text-sm font-medium">{user.avatar}</span>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#3ba55c] border-2 border-[#2f3136] rounded-full"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm font-medium truncate">{user.name}</div>
                      <div className="text-[#b9bbbe] text-xs truncate">{user.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Статистика сообщества */}
            <div className="mt-6">
              <h3 className="text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-3">Сообщество</h3>
              <div className="space-y-2">
                {[
                  { label: "Участников", value: "12 400+", icon: <Users className="w-3 h-3" /> },
                  { label: "Групп", value: "38", icon: <Hash className="w-3 h-3" /> },
                  { label: "Публикаций сегодня", value: "127", icon: <FileText className="w-3 h-3" /> },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between text-xs px-1">
                    <span className="text-[#8e9297] flex items-center gap-1">{stat.icon} {stat.label}</span>
                    <span className="text-white font-medium">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;