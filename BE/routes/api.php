<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
// Route::resource('company','Api\CompanyController');
// Route::resource('staff','Api\StaffController');
// Route::resource('typeGallery','Api\TypeGalleryController');
// Route::resource('gallery','Api\GalleryController');
// Route::resource('product','Api\ProductController');
// Route::resource('projects','Api\ProjectsController');
// Route::resource('itempackage','Api\ItemPackageController');
// Route::get('product','PhotoController@index');
Route::get('sendmail',function(){
    $to_name="Boat Supakit";
    $to_email="boatbububa@gmail.com";
    $data=array("name"=>"Supakit IoT","body"=>"test mail https://subs-series.blogspot.com/2019/06/w-two-worlds-1-16.html?play=10-7-1");
    
    Mail::send('mail', $data, function ($message)use($to_name,$to_email) {
        $message->to($to_email,$to_name)
        ->from('supakit.iot@gmail.com','Boat Supakit')
        ->subject('Subject');
        
       
    });
    return "sdadsa";
});

Route::get('getProjectDesign','Api\ProjectDesignController@getProjectDesign');
Route::post('postProjectDesign','Api\ProjectDesignController@postProjectDesign');
Route::post('putProjectDesign','Api\ProjectDesignController@putProjectDesign');
Route::get('delProjectDesign','Api\ProjectDesignController@delProjectDesign');

Route::get('getGetThreed','Api\GetThreedController@getGetThreed');
Route::post('postGetThreed','Api\GetThreedController@postGetThreed');
Route::post('putGetThreed','Api\GetThreedController@putGetThreed');
Route::get('delGetThreed','Api\GetThreedController@delGetThreed');

Route::get('getInterior','Api\InteriorController@getInterior');
Route::post('postInterior','Api\InteriorController@postInterior');
Route::post('putInterior','Api\InteriorController@putInterior');
Route::get('delInterior','Api\InteriorController@delInterior');

Route::get('getConsultant','Api\ConsultantController@getConsultant');
Route::post('postConsultant','Api\ConsultantController@postConsultant');
Route::post('putConsultant','Api\ConsultantController@putConsultant');
Route::get('delcon','Api\ConsultantController@delcon');


Route::get('getStatistics','Api\StatisticsController@getStatistics');
Route::post('postStatistics','Api\StatisticsController@postStatistics');

Route::get('getIGAd','Api\ImgGalleryController@getIGAd');
Route::post('postIGAd','Api\ImgGalleryController@postIGAd');
Route::get('delIG','Api\ImgGalleryController@delIG');

Route::post('postRequest','Api\RequestController@postRequest');
Route::get('getRequest','Api\RequestController@getRequest');
Route::get('getidReq','Api\RequestController@getidReq');
Route::get('getreqqq','Api\RequestController@getreqqq');
Route::post('putReq','Api\RequestController@putReq');

Route::get('getDiscount','Api\DiscountController@getDiscount');
Route::post('putDiscount','Api\DiscountController@putDiscount');

Route::get('getHowTo','Api\HowToController@getHowTo');
Route::post('postHowTo','Api\HowToController@postHowTo');
Route::post('putHowTo','Api\HowToController@putHowTo');
Route::get('deleteHowTo','Api\HowToController@deleteHowTo');

Route::get('getAdvertisement','Api\AdvertisementControllers@getAdvertisement');
Route::get('deleteAdvertisement','Api\AdvertisementControllers@deleteAdvertisement');
Route::post('postAdvertisement','Api\AdvertisementControllers@postAdvertisement');
Route::post('putAdvertisement','Api\AdvertisementControllers@putAdvertisement');

Route::get('getchat','Api\ChatController@getchat');
Route::get('getchatuser','Api\ChatController@getchatuser');
Route::post('postchatAdmin','Api\ChatController@postchatAdmin');
Route::post('postchatdb','Api\ChatController@postchatdb');
Route::get('putread','Api\ChatController@putread');
Route::get('getchatttt','Api\ChatController@getchatttt');

Route::get('getchatroom','Api\ChatRoomController@getchatroom');

Route::get('putst','Api\StatusAdminController@putst');

Route::put('a1','Api\A1Controller@index');
Route::get('a1d','Api\A1Controller@create');

Route::get('company','Api\CompanyController@index');
Route::get('getCompany','Api\CompanyController@getCompany');
Route::post('putCompany','Api\CompanyController@edit');

Route::get('staff','Api\StaffController@index');
Route::get('getstaffall','Api\StaffController@getstaffall');
Route::post('poststaff','Api\StaffController@store');
Route::post('putstaff','Api\StaffController@update');
Route::get('delstaff','Api\StaffController@destroy');

Route::get('typeGallery','Api\TypeGalleryController@index');
Route::post('posttypeGallery','Api\TypeGalleryController@store');
Route::post('puttypeGallery','Api\TypeGalleryController@update');
Route::get('deletetypeGallery','Api\TypeGalleryController@destroy');
Route::get('getnav','Api\TypeGalleryController@getnav');

Route::get('gallery','Api\GalleryController@index');
Route::get('gallery/{id}','Api\GalleryController@show');
Route::get('gallerya','Api\GalleryController@create');
Route::post('postgallerya','Api\GalleryController@store');
Route::post('putgallerya','Api\GalleryController@edit');
Route::get('deletegallerya','Api\GalleryController@destroy');
Route::get('galleryall','Api\GalleryController@update');

Route::post('getcart','Api\ProductController@getcart');
Route::get('product','Api\ProductController@index');
Route::get('product/{id}','Api\ProductController@show');
Route::post('product','Api\ProductController@store');
Route::post('product/{id}','Api\ProductController@update');
Route::get('newupdate','Api\ProductController@newupdate');
Route::get('filltertype','Api\ProductController@filltertype');
Route::get('producta','Api\ProductController@create');
Route::post('postproduct','Api\ProductController@store');
Route::post('putproduct','Api\ProductController@edit');
Route::get('deleteproduct','Api\ProductController@destroy');
Route::get('getproductAll','Api\ProductController@getproductAll');

Route::get('bestseller','Api\BestSellerController@bestseller');
Route::post('putbestseller','Api\BestSellerController@putbestseller');

Route::get('projects','Api\ProjectsController@index');
Route::get('projects/{id}','Api\ProjectsController@show');
Route::post('postprojects','Api\ProjectsController@store');
Route::post('putprojects','Api\ProjectsController@update');
Route::get('delprojects','Api\ProjectsController@destroy');

Route::get('itempackage','Api\ItemPackageController@index');
Route::get('itempackage/{id}','Api\ItemPackageController@show');
Route::post('itempackage/{id}','Api\ItemPackageController@update');
Route::get('getItemPackage','Api\ItemPackageController@getItemPackage');
Route::post('postItemPackage','Api\ItemPackageController@store');
Route::post('putItemPackage','Api\ItemPackageController@edit');
Route::get('delItemPackage','Api\ItemPackageController@destroy');

Route::get('gettypepackage','Api\TypePackageController@index');
Route::post('posttypepackage','Api\TypePackageController@store');
Route::post('puttypepackage','Api\TypePackageController@edit');
Route::get('deltypepackage','Api\TypePackageController@delete');

Route::get('getpackage','Api\PackageController@index');
Route::get('delpackage','Api\PackageController@destroy');
Route::post('postpackage','Api\PackageController@store');
Route::post('putpackage','Api\PackageController@edit');

Route::get('userlogin','Api\UsersController@GetUsers');
Route::get('getusername','Api\UsersController@Getusername');
Route::get('getemail','Api\UsersController@Getemail');
Route::post('postuser','Api\UsersController@Postuser');
Route::get('getadmin','Api\UsersController@getadmin');
Route::get('getExortCus','Api\UsersController@getExortCus');
Route::post('postadmin','Api\UsersController@postadmin');

Route::get('getpromotion','Api\PromotionController@Getpromotion');
Route::post('putpromotion','Api\PromotionController@putpromotion');

Route::get('excellenceproduct','Api\ExcellenceProductController@GetExcellenceProduct');
Route::get('GetExcellenceProductAll','Api\ExcellenceProductController@GetExcellenceProductAll');
Route::post('postExcellenceProduct','Api\ExcellenceProductController@postExcellenceProduct');
Route::post('putExcellenceProduct','Api\ExcellenceProductController@putExcellenceProduct');
Route::get('delExcellenceProduct','Api\ExcellenceProductController@delExcellenceProduct');

Route::get('getExcellenceAll','Api\ExcellenceController@getExcellenceAll');
Route::post('postExcellence','Api\ExcellenceController@postExcellence');
Route::post('putExcellence','Api\ExcellenceController@putExcellence');
Route::get('deleteExcellence','Api\ExcellenceController@deleteExcellence');

Route::get('getcomment','Api\CommentController@getcomment');
Route::post('postcomment','Api\CommentController@postcomment');
Route::get('detelecomment','Api\CommentController@detelecomment');

Route::get('getPaymentForm','Api\PaymentFormController@getPaymentForm');
Route::post('postPaymentForm','Api\PaymentFormController@postPaymentForm');
Route::post('putPaymentForm','Api\PaymentFormController@putPaymentForm');

Route::get('getpaym','Api\PaymentMethodController@getpaym');
Route::get('delpay','Api\PaymentMethodController@delpay');
Route::post('postpay','Api\PaymentMethodController@postpay');
Route::post('putpay','Api\PaymentMethodController@putpay');


Route::get('getbanner','Api\BannerController@getbanner');
Route::get('bannerpage','Api\BannerController@bannerpage');
Route::post('postbanner','Api\BannerController@postbanner');
Route::post('putbanner','Api\BannerController@putbanner');
Route::get('deleteban','Api\BannerController@deleteban');

Route::get('getvideo','Api\VideoController@getvideo');
Route::post('postvideos','Api\VideoController@postvideos');
Route::post('putvideos','Api\VideoController@putvideos');
Route::get('delvideos','Api\VideoController@delvideos');
Route::get('getshowvideos','Api\VideoController@getshowvideos');

Route::get('getNews','Api\NewsController@getNews');
Route::post('postnews','Api\NewsController@postnews');
Route::post('putnews','Api\NewsController@putnews');
Route::get('delnews','Api\NewsController@delnews');
Route::get('getshownews','Api\NewsController@getshownews');

Route::get('getEvent','Api\EventController@getEvent');
Route::post('postevent','Api\EventController@postevent');
Route::post('putevent','Api\EventController@putevent');
Route::get('delevent','Api\EventController@delevent');
Route::get('getshoweven','Api\EventController@getshoweven');

Route::get('getorder','Api\OrderController@getorder');
Route::post('postorder','Api\OrderController@postorder');
Route::get('getorderuser','Api\OrderController@getorderuser');
Route::get('getorderBill','Api\OrderController@getorderBill');
Route::post('putorder','Api\OrderController@putorder');
Route::post('puttackorder','Api\OrderController@puttackorder');
Route::get('getord','Api\OrderController@getord');
Route::get('getorderA','Api\OrderController@getorderA');