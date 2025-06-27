import Icon from "@/components/ui/icon";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Благотворительная акция «Тёплая зима» собрала более 10,000 вещей",
      excerpt:
        "Волонтёры организации провели масштабную акцию по сбору тёплой одежды для нуждающихся семей.",
      date: "15 декабря 2024",
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
      category: "Благотворительность",
    },
    {
      id: 2,
      title: "Образовательный форум «Гражданское общество 2025»",
      excerpt:
        "Приглашаем к участию в форуме, посвящённом развитию гражданских инициатив и молодёжного активизма.",
      date: "20 января 2025",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      category: "Образование",
    },
    {
      id: 3,
      title: "Запуск программы поддержки молодых лидеров",
      excerpt:
        "Новая программа направлена на развитие лидерских качеств у активной молодёжи региона.",
      date: "25 декабря 2024",
      image:
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop",
      category: "Молодёжь",
    },
  ];

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Последние новости
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Следите за нашими актуальными проектами и достижениями
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Icon name="Calendar" className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
                <h3 className="font-montserrat text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.excerpt}
                </p>
                <button className="text-green-500 font-semibold hover:text-green-600 transition-colors duration-200 flex items-center">
                  Читать далее
                  <Icon name="ArrowRight" className="h-4 w-4 ml-2" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            Все новости
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
