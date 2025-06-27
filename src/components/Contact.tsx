import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Готовы присоединиться к нашей миссии? Мы всегда открыты для новых
            участников и партнёров
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-green-50 p-3 rounded-full">
                <Icon name="MapPin" className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Наш адрес</h3>
                <p className="text-gray-600">
                  г. Москва, ул. Гражданская, д. 15, офис 301
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-50 p-3 rounded-full">
                <Icon name="Phone" className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Телефон</h3>
                <p className="text-gray-600">+7 (495) 123-45-67</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-50 p-3 rounded-full">
                <Icon name="Mail" className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">info@grazhdaninitiativa.ru</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-50 p-3 rounded-full">
                <Icon name="Clock" className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Время работы
                </h3>
                <p className="text-gray-600">
                  Пн-Пт: 9:00 - 18:00
                  <br />
                  Сб: 10:00 - 16:00
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
              Напишите нам
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Имя
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Ваше имя"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Расскажите, как хотите помочь..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
