export default function Elenco() {
  const elenco = [
    {
      id: 1,
      nome: 'Rose Gomes',
      foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      especialidades: ['Direção Artística', 'Dramaturgia', 'Atuação'],
      biografia: 'Fundadora do Ensino em Cena. Professora de Língua Portuguesa com mais de 15 anos de experiência em teatro educativo. Responsável pela criação e direção de todos os espetáculos da companhia.',
    },
    {
      id: 2,
      nome: 'Carlos Mendes',
      foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      especialidades: ['Atuação', 'Música', 'Canto'],
      biografia: 'Ator e músico com formação em Artes Cênicas. Participa dos espetáculos desde 2018, trazendo versatilidade e carisma para diversos personagens.',
    },
    {
      id: 3,
      nome: 'Juliana Santos',
      foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      especialidades: ['Atuação', 'Dança', 'Expressão Corporal'],
      biografia: 'Atriz e bailarina formada pela Escola de Teatro. Especialista em trabalhar com público infantil, conectando-se profundamente com os estudantes.',
    },
    {
      id: 4,
      nome: 'Pedro Alves',
      foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      especialidades: ['Atuação', 'Direção', 'Produção'],
      biografia: 'Ator e diretor teatral com ampla experiência em teatro educativo. Contribui tanto nos palcos quanto na produção dos espetáculos.',
    },
    {
      id: 5,
      nome: 'Mariana Costa',
      foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
      especialidades: ['Atuação', 'Voz', 'Caracterização'],
      biografia: 'Atriz profissional com talento especial para criar personagens memoráveis. Sua versatilidade vocal encanta plateias de todas as idades.',
    },
    {
      id: 6,
      nome: 'Rafael Lima',
      foto: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
      especialidades: ['Atuação', 'Acrobacia', 'Palhaçaria'],
      biografia: 'Ator circense e palhaço formado pela Escola Nacional de Circo. Traz energia e humor para os espetáculos, conquistando o público infantil.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#7A3EB1] to-[#FF6B6B] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Nosso Elenco</h1>
            <p className="text-xl text-gray-100">
              Nossos artistas são educadores que encantam, inspiram e transformam
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {elenco.map((membro) => (
              <div
                key={membro.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="h-64 overflow-hidden bg-[#1A3D7C]">
                  <img
                    src={membro.foto}
                    alt={membro.nome}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#1A3D7C] mb-2">
                    {membro.nome}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {membro.especialidades.map((esp, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#FFD23F] text-[#1A3D7C] text-sm font-semibold rounded-full"
                      >
                        {esp}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed">{membro.biografia}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#1A3D7C] mb-8">
              Bastidores
            </h2>
            <div className="bg-white rounded-xl shadow-md p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                Além dos artistas em cena, contamos com uma equipe técnica dedicada que trabalha nos bastidores para garantir a qualidade de cada apresentação. De figurinistas a técnicos de som e luz, cada profissional contribui para criar a magia do Ensino em Cena.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="h-48 bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80"
                    alt="Bastidores 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-48 bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                    alt="Bastidores 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-48 bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80"
                    alt="Bastidores 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-48 bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1516575114784-7abf2c36b18f?w=400&q=80"
                    alt="Bastidores 4"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
