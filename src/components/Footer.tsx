import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Icon name="Heart" className="h-8 w-8 text-green-500 mr-3" />
              <span className="font-montserrat font-bold text-xl">
                ГражданИнициатива
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Общественная организация, объединяющая людей для
              благотворительности, образования и поддержки гражданских
              инициатив.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-green-500 transition-colors duration-200"
              >
                <Icon name="Facebook" className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-green-500 transition-colors duration-200"
              >
                <Icon name="Twitter" className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-green-500 transition-colors duration-200"
              >
                <Icon name="Instagram" className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-green-500 transition-colors duration-200"
              >
                <Icon name="Youtube" className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-green-500 transition-colors duration-200"
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-green-500 transition-colors duration-200"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#news"
                  className="text-gray-300 hover:text-green-500 transition-colors duration-200"
                >
                  Новости
                </a>
              </li>
              <li>
                <a
                  href="#contacts"
                  className="text-gray-300 hover:text-green-500 transition-colors duration-200"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <Icon name="Phone" className="h-4 w-4 inline mr-2" />
                +7 (495) 123-45-67
              </li>
              <li className="text-gray-300">
                <Icon name="Mail" className="h-4 w-4 inline mr-2" />
                info@grazhdaninitiativa.ru
              </li>
              <li className="text-gray-300">
                <Icon name="MapPin" className="h-4 w-4 inline mr-2" />
                г. Москва, ул. Гражданская, 15
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 ГражданИнициатива. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
