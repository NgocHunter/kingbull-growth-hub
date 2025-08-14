import React, { useState, useEffect } from 'react';
import kingbullLogo from '@/assets/kingbull-logo.png';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Phone, 
  Mail, 
  MapPin, 
  FileText, 
  Play, 
  Download, 
  Calculator,
  Users,
  Globe,
  Headphones,
  TrendingUp,
  Factory,
  Shield,
  Award,
  Fish,
  Truck,
  Clock,
  DollarSign,
  Target,
  ChevronRight,
  Menu,
  X,
  Settings
} from 'lucide-react';

const KingBullApp = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navigation = [
    { id: 'home', label: 'Trang chủ', icon: Fish },
    { id: 'case-studies', label: 'Dự án thành công', icon: Award },
    { id: 'technical-library', label: 'Thư viện kỹ thuật', icon: FileText },
    { id: 'production-video', label: 'Video sản xuất', icon: Play },
    { id: 'dealer-portal', label: 'Khu vực đại lý', icon: Users },
    { id: 'supply-map', label: 'Bản đồ cung ứng', icon: Globe },
    { id: 'support', label: 'Hỗ trợ 24/7', icon: Headphones },
    { id: 'logistics', label: 'Tính logistics', icon: Calculator },
    { id: 'news', label: 'Tin tức ngành', icon: TrendingUp },
    { id: 'rnd', label: 'Hợp tác R&D', icon: Factory }
  ];

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return (
          <div className="space-y-16">
            <section className="relative min-h-[80vh] bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 text-white overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(14, 164, 232, 0.85), rgba(14, 164, 232, 0.85)), url('/api/placeholder/1920/1080')`
              }}>
              <div className="absolute top-4 left-4 text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                🏆 Tin cậy từ các trang trại hàng đầu Việt Nam
              </div>
              
              <div className="container mx-auto px-6 py-20 h-full flex items-center">
                <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                  <div className="space-y-8">
                    <div>
                      <h1 className="text-6xl md:text-7xl font-bold mb-4">KINGBULL</h1>
                      <h2 className="text-3xl md:text-4xl font-bold text-kingbull-gold mb-6">VIỆT NAM</h2>
                      <p className="text-xl md:text-2xl mb-8 font-medium text-blue-100">
                        "Đột phá tăng trưởng, dẫn đầu lợi nhuận"
                      </p>
                    </div>
                    
                    <p className="text-lg text-blue-50 leading-relaxed max-w-lg">
                      Công ty TNHH KingBull Việt Nam - Nhà cung cấp thức ăn thủy sản chất lượng cao, 
                      hỗ trợ trang trại đạt hiệu quả nuôi tối ưu với FCR thấp và lợi nhuận vượt trội.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        variant="secondary"
                        size="lg"
                        onClick={() => setActiveSection('case-studies')}
                        className="bg-kingbull-green hover:bg-kingbull-green/90 text-white border-0"
                      >
                        Xem Hồ sơ Dự án Thành công
                        <ChevronRight className="w-5 h-5 ml-2" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="border-white text-white hover:bg-white hover:text-kingbull-blue"
                      >
                        Liên hệ Hợp tác
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg">
                      <CardContent className="p-6 flex items-center gap-4">
                        <div className="w-12 h-12 bg-kingbull-gold rounded-lg flex items-center justify-center">
                          <Factory className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Năng lực cung ứng lớn</h3>
                          <p className="text-gray-600">Nhà máy hiện đại, sản xuất quy mô công nghiệp</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg">
                      <CardContent className="p-6 flex items-center gap-4">
                        <div className="w-12 h-12 bg-kingbull-gold rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Tối ưu lợi nhuận</h3>
                          <p className="text-gray-600">FCR thấp, tăng trọng nhanh, ROI vượt trội</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg">
                      <CardContent className="p-6 flex items-center gap-4">
                        <div className="w-12 h-12 bg-kingbull-gold rounded-lg flex items-center justify-center">
                          <Headphones className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Hỗ trợ kỹ thuật 24/7</h3>
                          <p className="text-gray-600">Đội ngũ chuyên gia sẵn sàng tư vấn mọi lúc</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-kingbull-green via-kingbull-blue to-kingbull-gold p-6">
                <div className="container mx-auto">
                  <div className="grid grid-cols-3 gap-8 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white">500+</div>
                      <div className="text-sm text-white/90">Trang trại hợp tác</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">1.2</div>
                      <div className="text-sm text-white/90">FCR trung bình</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">35%+</div>
                      <div className="text-sm text-white/90">Tăng lợi nhuận</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      
      default:
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-4">Đang phát triển</h2>
            <p className="text-muted-foreground">Tính năng này đang được hoàn thiện</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <img src={kingbullLogo} alt="KingBull Logo" className="h-8 w-auto" />
              <span className="text-2xl font-bold text-kingbull-blue">KINGBULL</span>
            </div>
            
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeSection === item.id
                      ? 'bg-kingbull-blue text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center gap-4 ml-6 text-sm text-gray-600">
                <span>📞 058.708.5649</span>
                <span>✉️ admin@kingbull.com.vn</span>
              </div>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Công ty TNHH KingBull Việt Nam. Mã số thuế: 1801608521</p>
            <p className="mt-2 text-primary font-medium">Đột phá tăng trưởng, dẫn đầu lợi nhuận</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default KingBullApp;