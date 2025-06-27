import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-green-50 to-blue-50 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="font-montserrat text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Вместе мы
              <span className="text-green-500"> меняем мир</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Общественная организация, объединяющая людей для
              благотворительности, образования и поддержки гражданских
              инициатив. Присоединяйтесь к нашей миссии!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105">
                Принять участие
              </button>
              <button className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                Узнать больше
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Icon
                    name="Sword"
                    className="h-12 w-12 text-green-500 mx-auto mb-3"
                  />
                  <div className="font-bold text-2xl text-gray-900">2,500+</div>
                  <div className="text-gray-600">Участников</div>
                </div>
                <div className="text-center">
                  <Icon
                    name="Crown"
                    className="h-12 w-12 text-blue-500 mx-auto mb-3"
                  />
                  <div className="font-bold text-2xl text-gray-900">150+</div>
                  <div className="text-gray-600">Проектов</div>
                </div>
                <div className="text-center">
                  <Icon
                    name="Shield"
                    className="h-12 w-12 text-orange-500 mx-auto mb-3"
                  />
                  <div className="font-bold text-2xl text-gray-900">300+</div>
                  <div className="text-gray-600">Мероприятий</div>
                </div>
                <div className="text-center">
                  <Icon
                    name="Cross"
                    className="h-12 w-12 text-purple-500 mx-auto mb-3"
                  />
                  <div className="font-bold text-2xl text-gray-900">5</div>
                  <div className="text-gray-600">Лет работы</div>
                </div>
              </div>
              {/* Декоративный терновый венец */}
              <div className="absolute -top-4 -right-4 text-amber-400 opacity-20">
                <div className="relative">
                  <Icon name="Crown" className="h-16 w-16 rotate-12" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-amber-400 rounded-full border-dashed"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
