import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "HandHeart",
      title: "Гуманитарная помощь",
      description:
        "Сбор и распределение помощи нуждающимся семьям, организация волонтёрских акций и поддержка социально уязвимых групп.",
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      icon: "GraduationCap",
      title: "Образовательные программы",
      description:
        "Проведение семинаров, тренингов и мастер-классов для развития гражданского общества и повышения правовой грамотности.",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: "Sparkles",
      title: "Молодёжные инициативы",
      description:
        "Поддержка молодёжных проектов, организация форумов и создание платформ для развития лидерских качеств.",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: "Calendar",
      title: "Общественные мероприятия",
      description:
        "Организация культурных и просветительских событий, круглых столов и общественных обсуждений актуальных вопросов.",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Наши направления деятельности
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мы работаем по четырём ключевым направлениям, объединяя людей для
            создания положительных изменений в обществе
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div
                className={`${service.bgColor} rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon
                  name={service.icon}
                  className={`h-8 w-8 ${service.color}`}
                />
              </div>
              <h3 className="font-montserrat text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
