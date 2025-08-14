import React, { useState } from 'react';
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
  X
} from 'lucide-react';

const KingBullApp = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  const caseStudies = [
    {
      id: 1,
      title: "Trại Cá Tra Mekong Delta",
      location: "Cần Thơ, Việt Nam",
      species: "Cá Tra",
      area: "50 ha",
      duration: "6 tháng",
      production: "2,500 tấn",
      fcr: "1.4",
      profit: "3.2 tỷ VNĐ",
      roi: "35%",
      image: "/api/placeholder/400/300",
      description: "Dự án nuôi cá tra quy mô lớn với công nghệ tiên tiến và thức ăn KingBull chuyên dụng."
    },
    {
      id: 2,
      title: "Trang Trại Tôm Xuất Khẩu",
      location: "Sóc Trăng, Việt Nam",
      species: "Tôm Thẻ Chân Trắng",
      area: "25 ha",
      duration: "4 tháng",
      production: "180 tấn",
      fcr: "1.2",
      profit: "2.8 tỷ VNĐ",
      roi: "42%",
      image: "/api/placeholder/400/300",
      description: "Nuôi tôm thâm canh với mật độ cao, đạt tiêu chuẩn xuất khẩu EU."
    },
    {
      id: 3,
      title: "Hệ Thống Nuôi Cá Basa",
      location: "An Giang, Việt Nam",
      species: "Cá Basa",
      area: "80 ha",
      duration: "8 tháng",
      production: "4,200 tấn",
      fcr: "1.3",
      profit: "5.1 tỷ VNĐ",
      roi: "38%",
      image: "/api/placeholder/400/300",
      description: "Hệ thống nuôi tích hợp với công nghệ AI quản lý chất lượng nước."
    }
  ];

  const technicalDocuments = [
    {
      id: 1,
      title: "Tối Ưu Hóa FCR Cho Cá Tra",
      category: "Kỹ thuật nuôi",
      species: "Cá Tra",
      stage: "Thương phẩm",
      downloads: 1250,
      rating: 4.8,
      description: "Hướng dẫn chi tiết tối ưu FCR từ 1.8 xuống 1.3 với thức ăn KingBull."
    },
    {
      id: 2,
      title: "Phòng Trừ Bệnh EMS Tôm",
      category: "Phòng bệnh",
      species: "Tôm",
      stage: "Toàn chu kỳ",
      downloads: 980,
      rating: 4.9,
      description: "Quy trình phòng trừ hiệu quả bệnh EMS và tăng tỷ lệ sống."
    },
    {
      id: 3,
      title: "Quản Lý Chất Lượng Nước",
      category: "Môi trường",
      species: "Đa loài",
      stage: "Toàn chu kỳ",
      downloads: 1560,
      rating: 4.7,
      description: "Hệ thống giám sát và xử lý nước tự động cho ao nuôi."
    }
  ];

  const NewsItems = [
    {
      id: 1,
      title: "Giá Nguyên Liệu Thức Ăn Tăng 15% Trong Q4",
      category: "Thị trường",
      date: "2024-12-01",
      summary: "Phân tích tác động và chiến lược ứng phó với biến động giá nguyên liệu...",
      trending: true
    },
    {
      id: 2,
      title: "Xuất Khẩu Thủy Sản Việt Nam Đạt Kỷ Lục",
      category: "Xuất khẩu",
      date: "2024-11-28",
      summary: "Kim ngạch xuất khẩu tăng 22% so với cùng kỳ năm trước...",
      trending: false
    }
  ];

  const VideoGallery = [
    {
      id: 1,
      title: "Quy Trình Sản Xuất Thức Ăn",
      duration: "8:42",
      category: "Sản xuất",
      thumbnail: "/api/placeholder/400/225",
      description: "Tham quan dây chuyền sản xuất hiện đại với công nghệ châu Âu."
    },
    {
      id: 2,
      title: "Kiểm Soát Chất Lượng",
      duration: "5:30",
      category: "Chất lượng",
      thumbnail: "/api/placeholder/400/225",
      description: "Hệ thống kiểm soát chất lượng 24/7 đảm bảo tiêu chuẩn quốc tế."
    }
  ];

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return (
          <div className="space-y-16">
            {/* Hero Section */}
            <section className="relative bg-gradient-hero text-white py-20 px-6 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative max-w-6xl mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                  KINGBULL
                </h1>
                <p className="text-xl md:text-2xl mb-8 font-medium">
                  Đột phá tăng trưởng, dẫn đầu lợi nhuận
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Button 
                    variant="accent" 
                    size="lg"
                    onClick={() => setActiveSection('case-studies')}
                    className="animate-float"
                  >
                    <Award className="w-5 h-5" />
                    Xem Dự Án Thành Công
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-primary"
                    onClick={() => setActiveSection('support')}
                  >
                    <Phone className="w-5 h-5" />
                    Liên Hệ Hợp Tác
                  </Button>
                </div>
                
                {/* Key Benefits */}
                <div className="grid md:grid-cols-3 gap-6 mt-16">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <Factory className="w-12 h-12 text-kingbull-gold mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-2">Năng Lực Cung Ứng Lớn</h3>
                    <p className="text-white/90">Dây chuyền sản xuất 500,000 tấn/năm</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <TrendingUp className="w-12 h-12 text-kingbull-gold mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-2">Tối Ưu Lợi Nhuận</h3>
                    <p className="text-white/90">FCR tối ưu 1.2-1.4, ROI trung bình 35%</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <Headphones className="w-12 h-12 text-kingbull-gold mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-2">Hỗ Trợ 24/7</h3>
                    <p className="text-white/90">Đội ngũ kỹ thuật chuyên nghiệp</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Stats */}
            <section className="grid md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-kingbull-blue">500K+</div>
                  <div className="text-muted-foreground">Tấn sản xuất/năm</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-kingbull-green">1,200+</div>
                  <div className="text-muted-foreground">Đối tác thành công</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-kingbull-gold">15+</div>
                  <div className="text-muted-foreground">Năm kinh nghiệm</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-kingbull-blue">35%</div>
                  <div className="text-muted-foreground">ROI trung bình</div>
                </CardContent>
              </Card>
            </section>
          </div>
        );

      case 'case-studies':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">Dự Án Nuôi Thành Công</h2>
              <p className="text-xl text-muted-foreground">Kết quả thực tế từ các đối tác KingBull</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudies.map((study) => (
                <Card key={study.id} className="hover:shadow-kingbull transition-all duration-300 cursor-pointer">
                  <div className="aspect-video bg-gradient-primary rounded-t-lg flex items-center justify-center">
                    <Fish className="w-16 h-16 text-white" />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {study.title}
                      <Badge variant="secondary">{study.species}</Badge>
                    </CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {study.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Diện tích</div>
                        <div className="font-semibold">{study.area}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Thời gian</div>
                        <div className="font-semibold">{study.duration}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Sản lượng</div>
                        <div className="font-semibold text-kingbull-green">{study.production}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">FCR</div>
                        <div className="font-semibold text-kingbull-blue">{study.fcr}</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-muted-foreground">ROI</div>
                        <div className="text-2xl font-bold text-kingbull-gold">{study.roi}</div>
                      </div>
                      <Button variant="hero" size="sm">
                        Xem Chi Tiết <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'technical-library':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">Thư Viện Kỹ Thuật Chuyên Sâu</h2>
              <p className="text-xl text-muted-foreground">Tài liệu kỹ thuật từ chuyên gia hàng đầu</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalDocuments.map((doc) => (
                <Card key={doc.id} className="hover:shadow-success transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{doc.title}</CardTitle>
                      <Badge>{doc.category}</Badge>
                    </div>
                    <CardDescription>{doc.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Loài nuôi:</span>
                        <span className="font-medium">{doc.species}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Giai đoạn:</span>
                        <span className="font-medium">{doc.stage}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Đánh giá:</span>
                        <span className="flex items-center gap-1">
                          ⭐ {doc.rating}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Tải về:</span>
                        <span className="font-medium">{doc.downloads} lượt</span>
                      </div>
                      <Button variant="success" className="w-full mt-4">
                        <Download className="w-4 h-4" />
                        Tải PDF
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'production-video':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">Video Quy Trình Sản Xuất</h2>
              <p className="text-xl text-muted-foreground">Tham quan nhà máy và công nghệ hiện đại</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {VideoGallery.map((video) => (
                <Card key={video.id} className="hover:shadow-kingbull transition-all duration-300 cursor-pointer">
                  <div className="aspect-video bg-gradient-primary rounded-t-lg flex items-center justify-center relative">
                    <Play className="w-16 h-16 text-white" />
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-sm px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {video.title}
                      <Badge variant="outline">{video.category}</Badge>
                    </CardTitle>
                    <CardDescription>{video.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* Factory Capabilities */}
            <section className="bg-muted rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Năng Lực Nhà Máy</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <Factory className="w-12 h-12 text-kingbull-blue mb-4 mx-auto" />
                  <h4 className="font-semibold mb-2">Dây chuyền hiện đại</h4>
                  <p className="text-sm text-muted-foreground">Công nghệ châu Âu, tự động hóa 95%</p>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 text-kingbull-green mb-4 mx-auto" />
                  <h4 className="font-semibold mb-2">Kiểm soát chất lượng</h4>
                  <p className="text-sm text-muted-foreground">ISO 22000, HACCP, BAP 4 sao</p>
                </div>
                <div className="text-center">
                  <Truck className="w-12 h-12 text-kingbull-gold mb-4 mx-auto" />
                  <h4 className="font-semibold mb-2">Logistics tối ưu</h4>
                  <p className="text-sm text-muted-foreground">Giao hàng 24h trong nước</p>
                </div>
                <div className="text-center">
                  <Target className="w-12 h-12 text-kingbull-blue mb-4 mx-auto" />
                  <h4 className="font-semibold mb-2">Nghiên cứu phát triển</h4>
                  <p className="text-sm text-muted-foreground">Đầu tư 5% doanh thu cho R&D</p>
                </div>
              </div>
            </section>
          </div>
        );

      case 'dealer-portal':
        return (
          <div className="space-y-8">
            {!isLoggedIn ? (
              <Card className="max-w-md mx-auto">
                <CardHeader>
                  <CardTitle>Đăng Nhập Khu Vực Đại Lý</CardTitle>
                  <CardDescription>
                    Truy cập tài liệu nội bộ và chính sách đặc biệt
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="username">Tên đăng nhập</Label>
                    <Input id="username" placeholder="dealer@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="password">Mật khẩu</Label>
                    <Input id="password" type="password" placeholder="••••••••" />
                  </div>
                  <Button 
                    variant="hero" 
                    className="w-full"
                    onClick={() => setIsLoggedIn(true)}
                  >
                    Đăng Nhập
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-4xl font-bold mb-4">Khu Vực Đại Lý</h2>
                  <p className="text-xl text-muted-foreground">Chào mừng đến với portal đối tác</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-kingbull-gold" />
                        Bảng Giá Đặc Biệt
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Giá ưu đãi cho đơn hàng số lượng lớn
                      </p>
                      <Button variant="success" className="w-full">
                        <Download className="w-4 h-4" />
                        Tải Bảng Giá
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-kingbull-blue" />
                        Chính Sách Chiết Khấu
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Hoa hồng và ưu đãi theo cấp bậc
                      </p>
                      <Button variant="hero" className="w-full">
                        <FileText className="w-4 h-4" />
                        Xem Chi Tiết
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-kingbull-green" />
                        Tài Liệu Đào Tạo
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Video và tài liệu kỹ thuật chuyên sâu
                      </p>
                      <Button variant="accent" className="w-full">
                        <Play className="w-4 h-4" />
                        Xem Video
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Thống Kê Hiệu Quả Kinh Doanh</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-kingbull-blue">1,250</div>
                        <div className="text-sm text-muted-foreground">Tấn đã bán (2024)</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-kingbull-green">95%</div>
                        <div className="text-sm text-muted-foreground">Khách hàng hài lòng</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-kingbull-gold">120%</div>
                        <div className="text-sm text-muted-foreground">Hoàn thành KPI</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-kingbull-blue">45</div>
                        <div className="text-sm text-muted-foreground">Đối tác mới</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        );

      case 'logistics':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">Công Cụ Tính Logistics & Kho Bãi</h2>
              <p className="text-xl text-muted-foreground">Mô phỏng chi phí và thời gian giao hàng</p>
            </div>

            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Tính Toán Vận Chuyển</CardTitle>
                <CardDescription>
                  Nhập thông tin để nhận báo giá chi tiết
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="quantity">Số lượng (tấn)</Label>
                    <Input id="quantity" placeholder="100" type="number" />
                  </div>
                  <div>
                    <Label htmlFor="destination">Địa điểm giao hàng</Label>
                    <Input id="destination" placeholder="TP. Hồ Chí Minh" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="product-type">Loại sản phẩm</Label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Thức ăn cá tra</option>
                    <option>Thức ăn tôm</option>
                    <option>Thức ăn cá basa</option>
                  </select>
                </div>

                <Button variant="hero" className="w-full">
                  <Calculator className="w-4 h-4" />
                  Tính Toán Chi Phí
                </Button>
              </CardContent>
            </Card>

            {/* Sample Results */}
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-kingbull-green">Kết Quả Mô Phỏng</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Số container cần thiết:</span>
                    <span className="font-semibold">4 container 20ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thời gian giao hàng:</span>
                    <span className="font-semibold text-kingbull-blue">2-3 ngày</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Kho xuất phát:</span>
                    <span className="font-semibold">Cần Thơ</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Chi phí vận chuyển:</span>
                    <span className="font-semibold text-kingbull-gold">25,000,000 VNĐ</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'news':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">Tin Tức Ngành & Phân Tích Thị Trường</h2>
              <p className="text-xl text-muted-foreground">Cập nhật xu hướng và thông tin quan trọng</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {NewsItems.map((news) => (
                <Card key={news.id} className="hover:shadow-kingbull transition-all duration-300 cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant={news.trending ? "default" : "secondary"}>
                        {news.category}
                      </Badge>
                      {news.trending && (
                        <Badge variant="destructive">🔥 Trending</Badge>
                      )}
                    </div>
                    <CardTitle>{news.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {news.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{news.summary}</p>
                    <Button variant="outline">
                      Đọc Thêm <ChevronRight className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'rnd':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">Chương Trình Hợp Tác R&D</h2>
              <p className="text-xl text-muted-foreground">Đối tác nghiên cứu và phát triển</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Factory className="w-6 h-6 text-kingbull-blue" />
                    Hợp Tác Viện Nghiên Cứu
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Cùng phát triển công thức thức ăn thế hệ mới với:</p>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Viện Nghiên Cứu Nuôi Trồng Thủy Sản 1</li>
                    <li>Đại học Cần Thơ - Khoa Thủy Sản</li>
                    <li>Viện Sinh Học Nhiệt Đới</li>
                  </ul>
                  <Button variant="hero">
                    Đăng Ký Hợp Tác
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-6 h-6 text-kingbull-green" />
                    Trại Thử Nghiệm
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Chương trình thử nghiệm sản phẩm mới:</p>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Hỗ trợ 100% chi phí thức ăn thử nghiệm</li>
                    <li>Giám sát kỹ thuật toàn chu kỳ</li>
                    <li>Chia sẻ lợi nhuận từ kết quả R&D</li>
                  </ul>
                  <Button variant="success">
                    Đăng Ký Thử Nghiệm
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'support':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">Hỗ Trợ Kỹ Thuật 24/7</h2>
              <p className="text-xl text-muted-foreground">Đội ngũ chuyên gia luôn sẵn sàng hỗ trợ</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6 space-y-4">
                  <Phone className="w-12 h-12 text-kingbull-blue mx-auto" />
                  <h3 className="text-xl font-semibold">Hotline Kỹ Thuật</h3>
                  <p className="text-2xl font-bold text-kingbull-blue">058.708.5649</p>
                  <p className="text-sm text-muted-foreground">24/7 - Miễn phí</p>
                  <Button variant="hero" className="w-full">
                    Gọi Ngay
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6 space-y-4">
                  <Mail className="w-12 h-12 text-kingbull-green mx-auto" />
                  <h3 className="text-xl font-semibold">Email Hỗ Trợ</h3>
                  <p className="text-lg font-mono">admin@kingbull.com.vn</p>
                  <p className="text-sm text-muted-foreground">Phản hồi trong 2 giờ</p>
                  <Button variant="success" className="w-full">
                    Gửi Email
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6 space-y-4">
                  <Users className="w-12 h-12 text-kingbull-gold mx-auto" />
                  <h3 className="text-xl font-semibold">Đặt Lịch Hẹn</h3>
                  <p className="text-lg">Chuyên gia tận nơi</p>
                  <p className="text-sm text-muted-foreground">Miễn phí khảo sát</p>
                  <Button variant="accent" className="w-full">
                    Đặt Lịch
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Regional Support */}
            <Card>
              <CardHeader>
                <CardTitle>Kỹ Thuật Viên Theo Khu Vực</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold">Miền Tây</h4>
                    <p className="text-sm text-muted-foreground">KTV. Nguyễn Văn A</p>
                    <p className="text-sm">📞 0901.234.567</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold">Miền Trung</h4>
                    <p className="text-sm text-muted-foreground">KTV. Trần Thị B</p>
                    <p className="text-sm">📞 0901.234.568</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold">Miền Bắc</h4>
                    <p className="text-sm text-muted-foreground">KTV. Lê Văn C</p>
                    <p className="text-sm">📞 0901.234.569</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'supply-map':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">Bản Đồ Năng Lực Cung Ứng</h2>
              <p className="text-xl text-muted-foreground">Mạng lưới phân phối toàn quốc</p>
            </div>

            {/* Interactive Map Placeholder */}
            <Card>
              <CardContent className="p-8">
                <div className="aspect-video bg-gradient-primary rounded-lg flex items-center justify-center text-white">
                  <div className="text-center">
                    <Globe className="w-16 h-16 mb-4 mx-auto" />
                    <h3 className="text-2xl font-bold mb-2">Bản Đồ Tương Tác</h3>
                    <p>Hiển thị kho bãi, vùng phân phối và thời gian giao hàng</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Supply Network Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Factory className="w-12 h-12 text-kingbull-blue mx-auto mb-4" />
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-muted-foreground">Nhà máy sản xuất</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Truck className="w-12 h-12 text-kingbull-green mx-auto mb-4" />
                  <div className="text-2xl font-bold">15</div>
                  <div className="text-muted-foreground">Kho phân phối</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Globe className="w-12 h-12 text-kingbull-gold mx-auto mb-4" />
                  <div className="text-2xl font-bold">63</div>
                  <div className="text-muted-foreground">Tỉnh/Thành phố</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Clock className="w-12 h-12 text-kingbull-blue mx-auto mb-4" />
                  <div className="text-2xl font-bold">24h</div>
                  <div className="text-muted-foreground">Giao hàng nhanh</div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="text-2xl font-bold text-primary">
              KINGBULL
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "hero" : "ghost"}
                  size="sm"
                  onClick={() => setActiveSection(item.id)}
                  className="flex items-center gap-2"
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Button>
              ))}
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t bg-background/95 backdrop-blur-sm">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Button
                    key={item.id}
                    variant={activeSection === item.id ? "hero" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsMenuOpen(false);
                    }}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className="bg-muted mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CÔNG TY TNHH KINGBULL VIỆT NAM</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Tầng 6, số 41, Cách Mạng Tháng Tám, Phường Cái Khế, TP Cần Thơ
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  058.708.5649
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  admin@kingbull.com.vn
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Sản Phẩm</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Thức ăn cá tra</li>
                <li>Thức ăn tôm</li>
                <li>Thức ăn cá basa</li>
                <li>Phụ gia dinh dưỡng</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hỗ Trợ</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Hotline: 058.708.5649</li>
                <li>Email: admin@kingbull.com.vn</li>
                <li>Hỗ trợ kỹ thuật 24/7</li>
                <li>Đào tạo chuyên sâu</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Công ty TNHH KingBull Việt Nam. Mã số thuế: 1801608521</p>
            <p className="mt-2 text-primary font-medium">Đột phá tăng trưởng, dẫn đầu lợi nhuận</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default KingBullApp;